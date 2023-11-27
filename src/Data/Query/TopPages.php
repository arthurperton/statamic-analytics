<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopPages extends AbstractQuery
{
    public function query()
    {
        return Database::connection()->table('sessions')
            ->join('pageviews', 'sessions.id', '=', 'pageviews.session_id')
            ->distinct('anonymous_id')
            ->selectRaw('path, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('pageviews.created', '>=', $this->from->getTimestamp())
            ->where('pageviews.created', '<', $this->to->getTimestamp())
            ->groupBy('path')
            ->orderBy('visitors', 'desc')
            ->orderBy('path', 'asc');
    }

    public static function columns()
    {
        return collect([
            Column::make('path', 'Page'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }
}