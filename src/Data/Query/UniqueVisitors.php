<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class UniqueVisitors implements Query
{
    public function query(Carbon $from, Carbon $to)
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('count(DISTINCT anonymous_id) AS value')
            ->where('created', '>=', $from->getTimestamp())
            ->where('created', '<', $to->getTimestamp());
    }
}