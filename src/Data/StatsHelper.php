<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;
use Locale;

class StatsHelper
{
    public static function general(Carbon $from, Carbon $to)
    {
        return collect([
            'uniqueVisitors',
            'visits',
            'pageviews',
            'viewsPerVisit',
            'bounceRate',
            'visitDuration',
        ])
            ->mapWithKeys(function ($type) use ($from, $to) {
                return [$type => static::$type($from, $to)];
            })
            ->all();
    }

    protected static function uniqueVisitorsQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('count(DISTINCT anonymous_id) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function uniqueVisitors(Carbon $from, Carbon $to)
    {
        return static::uniqueVisitorsQuery($from, $to)->value('value');
    }

    public static function uniqueVisitorsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::uniqueVisitorsQuery($from, $to), $from, $to);
    }

    protected static function visitsQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('count(*) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function visits(Carbon $from, Carbon $to)
    {
        return static::visitsQuery($from, $to)->value('value');
    }

    public static function visitsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::visitsQuery($from, $to), $from, $to);
    }

    protected static function pageviewsQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('pageviews')
            ->selectRaw('count(*) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function pageviews(Carbon $from, Carbon $to)
    {
        return static::pageviewsQuery($from, $to)->value('value');
    }

    public static function pageviewsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::pageviewsQuery($from, $to), $from, $to);
    }

    protected static function viewsPerVisitQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('avg(pageview_count) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function viewsPerVisit(Carbon $from, Carbon $to)
    {
        return static::viewsPerVisitQuery($from, $to)->value('value');
    }

    public static function viewsPerVisitChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::viewsPerVisitQuery($from, $to), $from, $to);
    }

    protected static function visitDurationQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('AVG(modified - created) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function visitDuration(Carbon $from, Carbon $to)
    {
        return static::visitDurationQuery($from, $to)->value('value');
    }

    public static function visitDurationChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::visitDurationQuery($from, $to), $from, $to);
    }

    protected static function bounceRateQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('100.0 * sum(CASE WHEN pageview_count = 1 THEN 1 ELSE 0 END) / count(*) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function bounceRate(Carbon $from, Carbon $to)
    {
        return static::bounceRateQuery($from, $to)->value('value');
    }

    public static function bounceRateChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::bounceRateQuery($from, $to), $from, $to);
    }

    protected static function chart(\Illuminate\Database\Query\Builder $query, Carbon $from, Carbon $to)
    {
        $fromSeconds = $from->getTimestamp();
        $toSeconds = $to->getTimestamp();

        $interval = $from->diff($to)->days <= 1 ? 3600 : 86400;

        $records = $query
            ->selectRaw("created - ((created - {$fromSeconds}) % {$interval}) AS timestamp")
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

    public static function sources(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('source, COUNT(*) as visitors')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp())
            ->groupBy('source')
            ->orderBy('visitors', 'desc')
            ->orderBy('source', 'asc')
            ->get();
    }

    public static function pages(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->join('pageviews', 'sessions.id', '=', 'pageviews.session_id')
            ->distinct('anonymous_id')
            ->selectRaw('path, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('pageviews.created', '>=', $from->getTimestamp())
            ->where('pageviews.created', '<', $to->getTimestamp())
            ->groupBy('path')
            ->orderBy('visitors', 'desc')
            ->orderBy('path', 'asc')
            ->get();
    }

    public static function locations(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw("
                CASE country 
                    WHEN NULL THEN 'ZZ'
                    ELSE TRIM(country, CHAR(10))
                END country, 
                COUNT(*) AS visitors
            ")
            // ->whereNotNull('country')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp())
            ->groupBy('country')
            ->orderBy('visitors', 'desc')
            ->orderBy('country', 'asc')
            ->get()
            ->map(function ($record) {
                // \Log::debug('['.$record->country.']');
                // $record->country = trim($record->country);
                $record->country = $record->country == 'ZZ'
                    ? 'Unknown'
                    : Locale::getDisplayRegion('-'.$record->country, 'en');

                return $record;
            });
    }

    public static function browsers(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('browser, COUNT(*) as visitors')
            ->whereNotNull('browser')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp())
            ->groupBy('browser')
            ->orderBy('visitors', 'desc')
            ->orderBy('browser', 'asc')
            ->get();
    }

    public static function operatingSystems(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('os, COUNT(*) as visitors')
            ->whereNotNull('os')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp())
            ->groupBy('os')
            ->orderBy('visitors', 'desc')
            ->orderBy('os', 'asc')
            ->get();
    }

    public static function devices(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('device, COUNT(*) as visitors')
            ->whereNotNull('device')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp())
            ->groupBy('device')
            ->orderBy('visitors', 'desc')
            ->orderBy('device', 'asc')
            ->get();
    }

    public static function getStartDate()
    {
        $seconds = Database::connection()->table('sessions')->min('created');

        return $seconds ? Carbon::createFromTimestamp($seconds) : null;
    }
}
