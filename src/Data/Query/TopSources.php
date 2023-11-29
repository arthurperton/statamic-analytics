<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopSources extends AbstractQuery
{
    public function query()
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('source, COUNT(*) as visitors')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('source')
            ->orderBy('visitors', 'desc')
            ->orderBy('source', 'asc');
    }

    public function data()
    {
        return $this->query()->get()->map(function ($record) {
            if (! $record->source) {
                $record->source = 'Direct / None';
                $record->icon = mb_chr(128279);
            } else {
                $record->icon = "https://icons.duckduckgo.com/ip3/{$record->source}.ico";
                $record->iconType = 'url';
            }

            return $record;
        });
    }

    public static function columns()
    {
        return collect([
            Column::make('source', 'Source'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }
}