<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopOperatingSystems extends AbstractQuery
{
    public function query()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('os, COUNT(*) as visitors')
            ->whereNotNull('os')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('os')
            ->orderBy('visitors', 'desc')
            ->orderBy('os', 'asc');
    }
    
    public static function title()
    {
        return 'OS';
    }

    public static function columns()
    {
        return collect([
            Column::make('os', 'Operating system'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }
}