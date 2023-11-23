<?php

namespace ArthurPerton\Analytics;

use ArthurPerton\Analytics\Http\Livewire\Aggregate;
use ArthurPerton\Analytics\Http\Livewire\Chart;
use ArthurPerton\Analytics\Http\Livewire\Counter;
use ArthurPerton\Analytics\Http\Livewire\Dashboard;
use ArthurPerton\Analytics\Http\Livewire\PeriodSelector;
use ArthurPerton\Analytics\Http\Livewire\TrendChart;
use ArthurPerton\Analytics\Http\Livewire\UniqueVisitors;
use Livewire\Livewire;
use Statamic\Facades\CP\Nav;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $commands = [
        Console\Commands\CreateDatabase::class,
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
        $this->addPublishables();
        
        $this->bootNavigation();

        Statamic::afterInstalled(function ($command) {
            $command->call('analytics:create-database');
            $command->call('analytics:update-geo');
        });

        Livewire::component('aggregate', Aggregate::class);
        Livewire::component('chart', Chart::class);
        Livewire::component('counter', Counter::class);
        Livewire::component('dashboard', Dashboard::class);
        Livewire::component('period-selector', PeriodSelector::class);
        Livewire::component('trend-chart', TrendChart::class);
    }

    protected function schedule($schedule)
    {
        $schedule->command('analytics:update-geo')->daily();
    }

    protected function addPublishables()
    {
        $this->publishables[__DIR__.'/../dist/js/web.js'] = public_path('vendor/analytics/js/web.js');
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
