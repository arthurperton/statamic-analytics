<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class BounceRate extends AbstractQuery
{
    public function query()
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('100.0 * sum(CASE WHEN pageview_count = 1 THEN 1 ELSE 0 END) / count(*) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->query()->value('value');
    }
}