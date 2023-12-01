<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class ViewsPerVisit extends AbstractQuery
{
    public function finalQuery(): \Illuminate\Database\Query\Builder
    {
        $subQuery = Database::connection()
            ->table('v_pageview')
            ->selectRaw('session_id, session_started_at, session_ended_at, COUNT(*) as pageviews')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp());

        $this->applyFilters($subQuery);
        
        $subQuery->groupBy('session_id');

        return Database::connection()
            ->table('v_pageview')
            ->selectRaw('AVG(pageviews) as value')
            ->fromSub($subQuery, 'session');
    }

    protected function fetchData()
    {
        return $this->finalQuery()->value('value');
    }
}