<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopDevices extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()->table('v_pageview')
            ->selectRaw('device as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->whereNotNull('value')
            ->where('session_started_at', '>=', $this->fromTimestamp())
            ->where('session_started_at', '<', $this->toTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public static function title(): string
    {
        return 'Device';
    }

    public static function columnName(): string
    {
        return 'device';
    }

    public static function columnTitle(): string
    {
        return 'Device';
    }
}