<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class BounceRate extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()
            ->table('v_session')
            ->selectRaw('100.0 * sum(CASE WHEN pageview_count = 1 THEN 1 ELSE 0 END) / count(*) AS value')
            ->where('started_at', '>=', $this->from->getTimestamp())
            ->where('started_at', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}