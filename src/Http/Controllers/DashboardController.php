<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\SessionHelper;
use Carbon\Carbon;
use Statamic\Http\Controllers\CP\CpController;

class DashboardController extends CpController
{
    public function index()
    {
        $to = Carbon::now()->startOfDay();
        $from = $to->clone()->subDays(7);

        $visitors = SessionHelper::uniqueVisitors($from, $to);
        $visits = SessionHelper::visits($from, $to);
        $pageviews = SessionHelper::pageviews($from, $to);
        $views = SessionHelper::viewsPerVisit($from, $to);
        $duration = SessionHelper::visitDuration($from, $to);
        $locations = SessionHelper::locations($from, $to);

        return view('analytics::dashboard', compact('visitors', 'visits', 'pageviews', 'views', 'duration', 'locations'));
    }
}
