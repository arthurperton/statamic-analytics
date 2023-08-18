<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\StatsHelper;
use Carbon\Carbon;
use Statamic\Http\Controllers\CP\CpController;

class DashboardController extends CpController
{
    public function index()
    {
        $to = Carbon::now(); //->startOfDay();
        $from = $to->clone()->subDays(7);

        $visitors = StatsHelper::uniqueVisitors($from, $to);
        $chart = StatsHelper::uniqueVisitorsChart($from, $to);
        $visits = StatsHelper::visits($from, $to);
        $pageviews = StatsHelper::pageviews($from, $to);
        $views = StatsHelper::viewsPerVisit($from, $to);
        $duration = StatsHelper::visitDuration($from, $to);
        $sources = StatsHelper::sources($from, $to);
        $pages = StatsHelper::pages($from, $to);
        $locations = StatsHelper::locations($from, $to);
        $browsers = StatsHelper::browsers($from, $to);
        $operatingSystems = StatsHelper::operatingSystems($from, $to);
        $devices = StatsHelper::devices($from, $to);

        return view('analytics::dashboard', compact(
            'chart',
            'visitors', 'visits', 'pageviews', 'views', 'duration', 'sources',
            'pages', 'locations', 'browsers', 'operatingSystems', 'devices',
        ));
    }
}
