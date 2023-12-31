<?php

use ArthurPerton\Analytics\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/analytics', 'as' => 'analytics.'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('/dashboard-content', [DashboardController::class, 'content']);
    Route::post('/dashboard/stats', [DashboardController::class, 'stats'])->name('dashboard.stats');
    Route::post('/dashboard/query', [DashboardController::class, 'query'])->name('dashboard.query');
});
