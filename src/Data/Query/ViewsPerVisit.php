<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class ViewsPerVisit implements Query
{
    public function query(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('avg(pageview_count) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }
}