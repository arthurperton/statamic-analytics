<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopDevices extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('device as value, COUNT(*) as visitors')
            ->whereNotNull('value')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public static function title()
    {
        return 'Device';
    }

    public static function columnName()
    {
        return 'device';
    }

    public static function columnTitle()
    {
        return 'Device';
    }
}