<?php

use ArthurPerton\Analytics\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/analytics', 'as' => 'analytics.'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('/iframecontent', [DashboardController::class, 'iframecontent']);
    Route::post('/dashboard/stats', [DashboardController::class, 'stats'])->name('dashboard.stats');
});
