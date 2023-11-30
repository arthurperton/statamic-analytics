<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopSources extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()
            ->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw('source as value, COUNT(*) as visitors')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('source')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public function data()
    {
        return $this->baseQuery()->get()->map(function ($record) {
            if (! $record->value) {
                $record->value = 'Direct / None';
                $record->icon = mb_chr(128279);
            } else {
                $record->icon = "https://icons.duckduckgo.com/ip3/{$record->value}.ico";
                $record->iconType = 'url';
            }

            return $record;
        });
    }

    public static function columnName()
    {
        return 'source';
    }

    public static function columnTitle()
    {
        return 'Source';
    }


}