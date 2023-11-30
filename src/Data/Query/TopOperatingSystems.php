<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopOperatingSystems extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('os as value, COUNT(*) as visitors')
            ->whereNotNull('value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }
    
    public static function title(): string
    {
        return 'OS';
    }

    public static function columnName(): string
    {
        return 'os';
    }

    public static function columnTitle(): string
    {
        return 'Operating system';
    }
}