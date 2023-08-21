<?php

namespace ArthurPerton\Analytics;

use ArthurPerton\Analytics\Facades\Database;
use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $commands = [
        Console\Commands\FakeEvents::class,
        Console\Commands\UpdateGeo::class,
    ];

    protected $stylesheets = [
        __DIR__.'/../dist/css/cp.css',
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/cp.js',
    ];

    protected $routes = [
        'cp' => __DIR__.'/../routes/cp.php',
        'web' => __DIR__.'/../routes/web.php',
    ];

    public function bootAddon()
    {
        $this->publishables[__DIR__.'/../dist/js/web.js'] = public_path('vendor/analytics/js/web.js');

        $this->bootDatabase();
        $this->bootNavigation();
    }

    protected function bootDatabase()
    {
        Database::create();
    }

    protected function bootNavigation()
    {
        Nav::extend(function ($nav) {
            // $nav->create('Dashboard')
            //     ->section('Analytics')
            //     ->route('analytics.dashboard.index')
            //     ->icon('charts');
            $nav->create('Analytics')
                ->section('Tools')
                ->route('analytics.dashboard.index')
                ->can('view analytics')
                ->icon('charts');
        });
    }
}
