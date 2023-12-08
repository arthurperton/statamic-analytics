<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopPages extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()->table('v_pageview')
            ->selectRaw('path as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->whereNotNull('value')
            ->where('session_started_at', '>=', $this->fromTimestamp())
            ->where('session_started_at', '<', $this->toTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public static function columnName(): string
    {
        return 'path';
    }

    public static function columnTitle(): string
    {
        return 'Page';
    }
}