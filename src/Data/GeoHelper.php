<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Facades\Database;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use InvalidArgumentException;

class GeoHelper
{
    protected \Illuminate\Support\Collection $batch;
    
    protected int $inserted = 0;

    protected int $batchSize = 5000;

    public function __construct()
    {
        $this->batch = collect();
    }

    public static function getCountry($ip = null)
    {
        $ip = $ip ?? Request::ip();

        // TODO support ipv6
        if (Str::contains($ip, ':')) {
            return null;
        }

        $ip = static::ipv4ToSortable($ip);

        $country = Database::connection()
            ->table('ip2geo')
            ->where('ip_from', '<=', $ip)
            ->where('ip_to', '>=', $ip)
            ->value('country');

        return $country;
    }

    public function truncate()
    {
        Database::connection()->table('ip2geo')->truncate();
    }

    public function createDatabase()
    {
        Database::create();
    }

    public function insertBatched($from, $to, $country)
    {
        // TODO support ipv6
        if (Str::contains($from, ':')) {
            return;
        }

        $this->batch->add([
            'ip_from' => static::ipv4ToSortable($from),
            'ip_to' => static::ipv4ToSortable($to),
            'country' => $country,
        ]);

        if ($this->batch->count() >= $this->batchSize) {
            $this->insertBatch();
        }
    }

    public function flushBatched()
    {
        $this->insertBatch();
    }

    protected function insertBatch()
    {
        if ($this->batch->count() === 0) {
            return;
        }

        Database::connection()->table('ip2geo')->insert($this->batch->all());

        $this->inserted += $this->batch->count();

        //$this->info("{$this->inserted} records");

        $this->batch = collect();
    }

    protected static function ipv4ToSortable($ipv4)
    {
        $numbers = explode('.', $ipv4);

        if (count($numbers) !== 4) {
            throw new InvalidArgumentException("Invalid ipv4 address: {$ipv4}");
        }

        return sprintf('%03d.%03d.%03d.%03d', ...$numbers);
    }
}