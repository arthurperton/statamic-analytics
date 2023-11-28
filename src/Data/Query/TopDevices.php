<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopDevices extends AbstractQuery
{
    public function query()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('device, COUNT(*) as visitors')
            ->whereNotNull('device')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('device')
            ->orderBy('visitors', 'desc')
            ->orderBy('device', 'asc');
    }


    public static function columns()
    {
        return collect([
            Column::make('device', 'Device'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }
}