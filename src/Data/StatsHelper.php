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
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function uniqueVisitors(Carbon $from, Carbon $to)
    {
        return static::uniqueVisitorsQuery($from, $to)->count();
    }

    protected static function chart(\Illuminate\Database\Query\Builder $query, Carbon $from, Carbon $to)
    {
        $fromSeconds = $from->getTimestamp();
        $toSeconds = $to->getTimestamp();

        $interval = $from->diff($to)->days <= 1 ? 3600 : 86400;

        $records = $query
            ->selectRaw("created - MOD(created - {$fromSeconds}, {$interval}) AS timestamp")
            ->selectRaw('COUNT(*) as visitors')
            ->groupBy('timestamp')
            ->orderBy('timestamp')
            ->get();

        $series = collect();
        for ($timestamp = $fromSeconds; $timestamp < $toSeconds; $timestamp += $interval) {
            $series->put($timestamp, (object) ['timestamp' => $timestamp, 'visitors' => 0]);
        }

        $records->each(function ($record) use ($series) {
            $series->put($record->timestamp, $record);
        });

        return $series->values();
    }

    public static function uniqueVisitorsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::uniqueVisitorsQuery($from, $to), $from, $to);
    }

    protected static function visitsQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('sessions')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function visits(Carbon $from, Carbon $to)
    {
        return static::visitsQuery($from, $to)->count();
    }

    public static function visitsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::visitsQuery($from, $to), $from, $to);
    }

    public static function pageviewsQuery(Carbon $from, Carbon $to)
    {
        return Database::connection()->table('pageviews')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }

    public static function pageviews(Carbon $from, Carbon $to)
    {
        return static::pageviewsQuery($from, $to)->count();
    }

    public static function pageviewsChart(Carbon $from, Carbon $to)
    {
        return static::chart(static::pageviewsQuery($from, $to), $from, $to);
    }

    public static function viewsPerVisit(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->selectOne('
                WITH counts AS (
                    SELECT      count(pageviews.id) AS pageview_count
                    FROM        sessions
                    LEFT JOIN   pageviews
                    ON          sessions.id = pageviews.session_id
                    WHERE       sessions.created >= ?
                    AND         sessions.created < ?
                    GROUP BY    session_id
                )
                SELECT AVG(pageview_count) AS value FROM counts
            ', [$from->getTimestamp(), $to->getTimestamp()])->value;
    }

    public static function visitDuration(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->selectOne('
                SELECT  AVG(modified - created) AS value
                FROM    sessions
                WHERE   sessions.created >= ?
                AND     sessions.created < ?
            ', [$from->getTimestamp(), $to->getTimestamp()])->value;
    }

    public static function bounceRate(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->selectOne('
                WITH pages_per_session AS (
                    SELECT      session_id, COUNT(pageviews.id) as pages
                    FROM        sessions
                    LEFT JOIN   pageviews
                    ON          sessions.id = pageviews.session_id
                    WHERE       sessions.created >= ?
                    AND         sessions.created < ?
                    GROUP BY    session_id
                )
                SELECT
                    100 * (SELECT COUNT(*) FROM pages_per_session WHERE pages = 1) /
                    (SELECT COUNT(*) FROM pages_per_session) AS value
            ', [$from->getTimestamp(), $to->getTimestamp()])->value;
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
