<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class ViewsPerVisit extends AbstractQuery
{
    public function query()
    {
        return Database::connection()
            ->table('v_sessions_pageviews')
            ->selectRaw('avg(pageview_count) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->query()->value('value');
    }
}