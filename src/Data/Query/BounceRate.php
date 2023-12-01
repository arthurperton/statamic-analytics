<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class BounceRate extends AbstractQuery
{
    // public function baseQuery(): \Illuminate\Database\Query\Builder | null
    // {
    //     return Database::connection()
    //         ->table('v_session')
    //         ->selectRaw('100.0 * sum(CASE WHEN pageview_count = 1 THEN 1 ELSE 0 END) / count(*) AS value')
    //         ->where('session_started_at', '>=', $this->from->getTimestamp())
    //         ->where('session_started_at', '<', $this->to->getTimestamp());
    // }

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
            ->selectRaw('100.0 * sum(CASE WHEN pageviews = 1 THEN 1 ELSE 0 END) / count(*) AS value')
            ->fromSub($subQuery, 'session');
    }


    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}