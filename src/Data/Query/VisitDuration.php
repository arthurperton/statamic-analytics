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
            ->where('session_started_at', '>=', $this->fromTimestamp())
            ->where('session_started_at', '<', $this->toTimestamp());

        $this->applyFilters($subQuery);
        
        return Database::connection()
            ->table('v_pageview')
            ->selectRaw('AVG(session_ended_at - session_started_at) as value')
            ->fromSub($subQuery, 'session');
    }

    protected function fetchData()
    {
        return $this->finalQuery()->value('value');
    }
}