<?php

namespace ArthurPerton\Analytics\Console\Commands;

use ArthurPerton\Analytics\Data\GeoHelper;
use ArthurPerton\Analytics\Facades\Database;
use Illuminate\Console\Command;
use Statamic\Facades\File;

class UpdateGeo extends Command
{
    protected $signature = 'analytics:update-geo';

    protected $description = 'Download the latest IP to geolocation data.';    

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(): int
    {
        $this->update();

        return 0;
    }

    public function update()
    {
        $monthsAgo = 0;

        $date = date('Y-m', strtotime("-{$monthsAgo} months"));

        $url = "https://download.db-ip.com/free/dbip-country-lite-{$date}.csv.gz";

        // TODO check if a file is available at the URL

        // $gzip = tempnam(sys_get_temp_dir(), 'countries.csv.gz');
        $gzip = storage_path('analytics/countries.csv.gz');

        File::put($gzip, '');

        $this->info('Downloading...');
        $this->download($url, $gzip);

        // TODO check if download is successful

        $csv = str_replace('.gz', '', $gzip);

        $this->info('Extracting...');
        $this->extract($gzip, $csv);

        File::delete($gzip);

        $this->info('Importing...');
        $this->import($csv);

        File::delete($csv);
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

        $file = fopen($filename, "r"); // TODO handle fail
        
        while(! feof($file)) {
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

}
