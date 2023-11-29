<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopBrowsers extends AbstractQuery
{
    public function query()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('browser, COUNT(*) as visitors')
            ->whereNotNull('browser')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('browser')
            ->orderBy('visitors', 'desc')
            ->orderBy('browser', 'asc');
    }

    public static function title()
    {
        return 'Browser';
    }

    public static function columns()
    {
        return collect([
            Column::make('browser', 'Browser'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }
}
