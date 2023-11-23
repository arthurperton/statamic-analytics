<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class BounceRate implements Query
{
    public function query(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('100.0 * sum(CASE WHEN pageview_count = 1 THEN 1 ELSE 0 END) / count(*) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }
}