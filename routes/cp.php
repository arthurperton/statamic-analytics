<?php

use ArthurPerton\Analytics\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/analytics', 'as' => 'analytics.'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
});
