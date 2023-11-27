<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class Visits extends AbstractQuery
{
    public function query()
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('count(*) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->query()->value('value');
    }
}