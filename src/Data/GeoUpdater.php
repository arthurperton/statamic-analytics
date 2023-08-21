<?php

namespace ArthurPerton\Analytics\Data;

use Statamic\Facades\File;

class GeoUpdater
{
    public function update($force = false, $info = null)
    {
        if (is_null($info)) {
            $info = function ($message) {
                \Log::debug($message);
            };
        }

        $info('Updating geolocation data');
        $current = $this->getMeta('version');

        $monthsAgo = 0;

        $date = date('Y-m', strtotime("-{$monthsAgo} months"));

        $url = "https://download.db-ip.com/free/dbip-country-lite-{$date}.csv.gz";

        // TODO check if a file is available at the URL
        $info("Installed version: $current");

        if ($date <= $current && ! $force) {
            $info("Up to date");

            return;
        }

        // $gzip = tempnam(sys_get_temp_dir(), 'countries.csv.gz');
        $gzip = storage_path('analytics/countries.csv.gz');

        File::put($gzip, '');

        $info('Downloading...');
        $this->download($url, $gzip);

        // TODO check if download is successful

        $csv = str_replace('.gz', '', $gzip);

        $info('Extracting...');
        $this->extract($gzip, $csv);

        File::delete($gzip);

        $info('Importing...');
        $this->import($csv);

        $this->setMeta(['version' => $date]);

        File::delete($csv);

        $info('Done!');
    }

    protected function download($url, $path)
    {
        $file = fopen($path, 'w');

        $client = new \GuzzleHttp\Client();
        $client->get($url, ['sink' => $file]);
    }

    protected function extract($filename, $output = null)
    {
        if (! $output) {
            $output = str_replace('.gz', '', $filename);
        }

        $src = gzopen($filename, 'rb');
        $dest = fopen($output, 'wb');

        while (! gzeof($src)) {
            fwrite($dest, gzread($src, 4096));
        }

        fclose($dest);
        gzclose($src);
    }

    protected function import($filename)
    {
        $geo = new GeoHelper();

        $file = fopen($filename, 'r'); // TODO handle fail

        $geo->truncate();

        while (! feof($file)) {
            $line = fgets($file);

            $parts = explode(',', $line);
            if (count($parts) === 3) {
                [$from, $to, $country] = $parts;

                // echo "$from - $to => $country";
                $geo->insertBatched($from, $to, $country);
            }
        }

        $geo->flushBatched();

        fclose($file);
    }

    protected function metaPath()
    {
        return storage_path('analytics/meta');
    }

    protected function setMeta(array $data)
    {
        $meta = $this->getMeta();

        $meta = array_merge($meta, $data);

        File::put($this->metaPath(), serialize($meta));
    }

    protected function getMeta(string $key = null, mixed $fallback = null)
    {
        $text = File::get($this->metaPath());

        $meta = $text ? unserialize($text) : [];

        if (is_null($key)) {
            return $meta;
        }

        return $meta[$key] ?? $fallback;
    }
}
