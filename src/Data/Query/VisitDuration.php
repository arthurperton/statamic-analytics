<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class VisitDuration extends AbstractQuery
{
    public function finalQuery(): \Illuminate\Database\Query\Builder
    {
        $subQuery = Database::connection()
            ->table('v_pageview')
            ->selectRaw('DISTINCT session_id, session_started_at, session_ended_at')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp());

        $this->applyFilters($subQuery);
        
        return Database::connection()
            ->table('v_pageview')
            ->selectRaw('AVG(session_ended_at - session_started_at) as value')
            ->fromSub($subQuery, 'session');
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}