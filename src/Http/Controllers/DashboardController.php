<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\StatsHelper;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Statamic\Http\Controllers\CP\CpController;

class DashboardController extends CpController
{
    public function index()
    {
        return view('analytics::dashboard');
    }

    public function stats(Request $request)
    {
        $data = $request->json()->all();

        $method = $data['type'];
        $period = $data['period'];

        $to = Carbon::now()->startOfDay()->addDay();
        if ($period === 'all time') {
            $from = StatsHelper::getStartDate()->startOfDay();
        } elseif (preg_match('/last (\d+) days?/', $period, $matches)) {
            $days = $matches[1];
            $from = $to->clone()->subDays($days);
        } else {
            return response('', 400);
        }

        return response()->json([
            'data' => StatsHelper::$method($from, $to),
        ]);
    }
}
