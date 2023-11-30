<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopPages extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()->table('v_pageview')
            // ->distinct('anonymous_id')
            ->selectRaw('path as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('pageview.started_at', '>=', $this->from->getTimestamp())
            ->where('pageview.started_at', '<', $this->to->getTimestamp())
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