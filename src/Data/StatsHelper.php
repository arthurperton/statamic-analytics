<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class StatsHelper
{
    public static function uniqueVisitors(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<=', $to->getTimestamp())
            ->count();
    }

    public static function uniqueVisitorsChart(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('DATE(created, \'unixepoch\') as day, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<=', $to->getTimestamp())
            ->groupBy('day')
            ->get();
        
    }

    public static function visits(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<=', $to->getTimestamp())
            ->count();
    }

    public static function pageviews(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('pageviews')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<=', $to->getTimestamp())
            ->count();
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
                    AND         sessions.created <= ?
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
                AND     sessions.created <= ?
            ', [$from->getTimestamp(), $to->getTimestamp()])->value;
    }

    public static function bounceRate(Carbon $from, Carbon $to)
    {
        // return Database::connection()
        //     ->selectOne('
        //         SELECT  COUNT AS value
        //         FROM    sessions
        //         WHERE   sessions.created >= ?
        //         AND     sessions.created <= ?
        //     ', [$from->getTimestamp(), $to->getTimestamp()])->value;
    }

    public static function sources(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('source, COUNT(*) as visitors')
            ->groupBy('source')
            ->get();
    }

    public static function pages(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->join('pageviews', 'sessions.id', '=', 'pageviews.session_id')
            ->distinct('anonymous_id')
            ->selectRaw('path, COUNT(DISTINCT anonymous_id) as visitors')
            ->groupBy('path')
            ->get();
    }

    public static function locations(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('country, COUNT(*) as visitors')
            ->whereNotNull('country')
            ->groupBy('country')
            ->get();
    }

    public static function browsers(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('browser, COUNT(*) as visitors')
            ->whereNotNull('browser')
            ->groupBy('browser')
            ->get();
    }

    public static function operatingSystems(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('os, COUNT(*) as visitors')
            ->whereNotNull('os')
            ->groupBy('os')
            ->get();
    }

    public static function devices(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('device, COUNT(*) as visitors')
            ->whereNotNull('device')
            ->groupBy('device')
            ->get();
    }



}
