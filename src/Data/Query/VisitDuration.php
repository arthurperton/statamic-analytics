<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class VisitDuration extends AbstractQuery
{
    public function query()
    {
        return Database::connection()
            ->table('sessions')
            ->selectRaw('AVG(modified - created) AS value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp());
    }

    public function data()
    {
        return $this->query()->value('value');
    }
}