<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\Query\Query;
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

    public function content()
    {
        return view('analytics::dashboard-content');
    }

    public function query(Request $request)
    {
        $data = $request->json()->all();

        $query = array_get($data, 'query');
        $period = array_get($data, 'period', 7);
        $filters = array_get($data, 'filters', []);

        $to = Carbon::today();
        $from = $to->clone()->subDays($period);

        $start = microtime(true);
        $data = Query::make($query)
            ->from($from)
            ->to($to)
            ->filters($filters)
            ->data();
        $duration = round(1E3 * (microtime(true) - $start));

        return response()->json([
            'data' => $data,
            'meta' => [
                'query' => $query,
                'period' => $period,
                'duration' => $duration,
            ]
        ]);
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
        
        $start = microtime(true);
        $data = StatsHelper::$method($from, $to);
        $duration = round(1E3 * (microtime(true) - $start));

        return response()->json([
            'data' => $data,
            'meta' => [
                'type' => $method,
                'period' => $period,
                'queryDuration' => $duration,
            ]
        ]);
    }
}
