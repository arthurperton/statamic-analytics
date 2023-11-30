<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class VisitDuration extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()
            ->table('v_pageviews')
            ->selectRaw('session_id, AVG(session_ended_at - session_started_at) AS value')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp())
            ->groupBy('session_id');
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}