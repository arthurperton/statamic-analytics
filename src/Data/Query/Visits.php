<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class Visits extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()
            ->table('v_pageviews')
            ->selectRaw('COUNT(DISTINCT session_id) AS value')
            ->where('session_created', '>=', $this->from->getTimestamp())
            ->where('session_created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}