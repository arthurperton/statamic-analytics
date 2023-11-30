<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class UniqueVisitors extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('count(DISTINCT anonymous_id) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->baseQuery()->value('value');
    }
}