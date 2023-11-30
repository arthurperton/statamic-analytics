<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopPages extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder
    {
        return Database::connection()->table('sessions')
            ->join('pageviews', 'sessions.id', '=', 'pageviews.session_id')
            ->distinct('anonymous_id')
            ->selectRaw('path as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('pageviews.started_at', '>=', $this->from->getTimestamp())
            ->where('pageviews.started_at', '<', $this->to->getTimestamp())
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