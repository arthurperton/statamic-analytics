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
        // return Database::connection()
        //     ->raw
    }

    public static function visitDuration(Carbon $from, Carbon $to)
    {

    }

    public static function bounceRate(Carbon $from, Carbon $to)
    {

    }

}
