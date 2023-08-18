<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\StatsHelper;
use Carbon\Carbon;
use Statamic\Http\Controllers\CP\CpController;

class DashboardController extends CpController
{
    public function index()
    {
        $to = Carbon::now();//->startOfDay();
        $from = $to->clone()->subDays(7);

        $visitors = StatsHelper::uniqueVisitors($from, $to);
        $visits = StatsHelper::visits($from, $to);
        $pageviews = StatsHelper::pageviews($from, $to);
        $views = StatsHelper::viewsPerVisit($from, $to);
        $duration = StatsHelper::visitDuration($from, $to);
        $locations = StatsHelper::locations($from, $to);

        return view('analytics::dashboard', compact('visitors', 'visits', 'pageviews', 'views', 'duration', 'locations'));
    }
}
