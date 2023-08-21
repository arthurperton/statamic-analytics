<?php

namespace ArthurPerton\Analytics\Console\Commands;

use ArthurPerton\Analytics\Data\GeoUpdater;
use Illuminate\Console\Command;

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
        $updater = new GeoUpdater();
        $updater->update();

        return 0;
    }
}
