<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class UniqueVisitors extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()
            ->table('v_pageview')
            ->selectRaw('count(DISTINCT anonymous_id) AS value')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp());
    }

    protected function fetchData()
    {
        return $this->finalQuery()->value('value');
    }
}