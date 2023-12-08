<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class Pageviews extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()
            ->table('v_pageview')
            ->selectRaw('count(*) AS value')
            ->where('session_started_at', '>=', $this->fromTimestamp())
            ->where('session_started_at', '<', $this->toTimestamp());
    }

    protected function fetchData()
    {
        return $this->finalQuery()->value('value');
    }
}