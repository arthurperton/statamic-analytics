<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class UniqueVisitors extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()
            ->table('v_pageviews')
            ->selectRaw('count(DISTINCT anonymous_id) AS value')
            ->where('started_at', '>=', $this->from->getTimestamp())
            ->where('started_at', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}