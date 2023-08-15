<?php

use ArthurPerton\Analytics\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::post('/!/analytics/event', [EventController::class, 'store'])
    ->withoutMiddleware('App\Http\Middleware\VerifyCsrfToken');

