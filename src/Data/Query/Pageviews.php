<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class Pageviews implements Query
{
    public function query(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('pageviews')
            ->selectRaw('count(*) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }
}