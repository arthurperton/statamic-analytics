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
        $parameters = $request->json()->all();

        $query = array_get($parameters, 'query');
        $period = array_get($parameters, 'period', 7);
        $filters = array_get($parameters, 'filters', []);
        $limit = array_get($parameters, 'limit', -1);
        $chart = (bool) array_get($parameters, 'chart', false);

        $to = $period === 1 ? Carbon::tomorrow() : Carbon::today();
        $from = $to->clone()->subDays($period);

        $start = microtime(true);
        if ($chart) {
            $data = $this->createChartData($query, $from, $to, $filters);
        } else {
            $data = Query::make($query)
                ->from($from)
                ->to($to)
                ->filters($filters)
                ->limit($limit)
                ->data();
        }
        $duration = round(1E3 * (microtime(true) - $start));

        return response()->json([
            'data' => $data,
            'meta' => [
                'query' => $query,
                'period' => $period,
                'filters' => $filters,
                'duration' => $duration,
            ]
        ]);
    }

    protected function createChartData($query, $from, $to, $filters)
    {
        $fromSeconds = $from->getTimestamp();
        $toSeconds = $to->getTimestamp();

        $interval = $from->diff($to)->days <= 1 ? 3600 : 86400;

        $records = Query::make($query)
            ->from($from)
            ->to($to) 
            ->filters($filters)
            ->finalQuery()
            ->selectRaw("session_started_at - ((session_started_at - {$fromSeconds}) % {$interval}) AS timestamp")
            ->groupBy('timestamp')
            ->orderBy('timestamp')
            ->get();

        $series = collect();
        for ($timestamp = $fromSeconds; $timestamp < $toSeconds; $timestamp += $interval) {
            $series->put($timestamp, (object) ['timestamp' => $timestamp, 'value' => 0]);
        }

        $records->each(function ($record) use ($series) {
            $series->put($record->timestamp, $record);
        });

        return $series->values();
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
