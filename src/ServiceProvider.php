<?php

namespace ArthurPerton\Analytics;

use ArthurPerton\Analytics\Facades\Database;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $commands = [
        Console\Commands\UpdateGeo::class,
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/cp.js',
    ];

    protected $routes = [
        // 'cp' => __DIR__.'/../routes/cp.php',
        'web' => __DIR__.'/../routes/web.php',
    ];

    public function bootAddon()
    {
        Database::create();
    }
}
