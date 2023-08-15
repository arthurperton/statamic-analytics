<?php

namespace ArthurPerton\Analytics;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/app.js',
    ];
}
