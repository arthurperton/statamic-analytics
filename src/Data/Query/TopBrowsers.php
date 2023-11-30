<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopBrowsers extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('browser as value, COUNT(*) as visitors')
            ->whereNotNull('value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public static function title()
    {
        return 'Browser';
    }

    public static function columnName()
    {
        return 'browser';
    }

    public static function columnTitle()
    {
        return 'Browser';
    }
}
