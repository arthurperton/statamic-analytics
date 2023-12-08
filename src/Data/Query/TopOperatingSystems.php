<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopOperatingSystems extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()->table('v_pageview')
            ->selectRaw('os as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->whereNotNull('value')
            ->where('session_started_at', '>=', $this->fromTimestamp())
            ->where('session_started_at', '<', $this->toTimestamp())
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