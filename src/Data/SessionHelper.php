<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class SessionHelper
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

}
