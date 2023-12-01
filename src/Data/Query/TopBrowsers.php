<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopBrowsers extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()->table('v_pageview')
            ->selectRaw('browser as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->whereNotNull('value')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public static function title(): string
    {
        return 'Browser';
    }

    public static function columnName(): string
    {
        return 'browser';
    }

    public static function columnTitle(): string
    {
        return 'Browser';
    }
}
