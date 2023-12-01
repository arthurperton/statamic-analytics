<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;

class TopSources extends AbstractQuery
{
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return Database::connection()->table('v_pageview')
            ->selectRaw('source as value, COUNT(DISTINCT anonymous_id) as visitors')
            ->where('session_started_at', '>=', $this->from->getTimestamp())
            ->where('session_started_at', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    protected function fetchData()
    {
        return $this->finalQuery()->get()->map(function ($record) {
            if (! $record->value) {
                $record->displayValue = 'Direct / None';
                $record->icon = mb_chr(128279);
            } else {
                $record->icon = "https://icons.duckduckgo.com/ip3/{$record->value}.ico";
                $record->iconType = 'url';
            }

            return $record;
        });
    }

    public static function columnName(): string
    {
        return 'source';
    }

    public static function columnTitle(): string
    {
        return 'Source';
    }
}
