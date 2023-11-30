<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class Pageviews extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()
            ->table('v_pageviews')
            ->selectRaw('count(*) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->finalQuery()->value('value');
    }
}