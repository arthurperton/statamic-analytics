<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Locale;

class TopCountries extends AbstractQuery
{
    public function query()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw("
                CASE country 
                    WHEN NULL THEN 'ZZ'
                    ELSE TRIM(country, CHAR(10))
                END country, 
                COUNT(*) AS visitors
            ")
            // ->whereNotNull('country')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('country')
            ->orderBy('visitors', 'desc')
            ->orderBy('country', 'asc');
    }

    public function data()
    {
        return $this->query()->get()
            ->map(function ($record) {
                // \Log::debug('['.$record->country.']');
                // $record->country = trim($record->country);
                $record->country = $record->country == 'ZZ'
                    ? 'Unknown'
                    : $this->flag($record->country).' '.Locale::getDisplayRegion('-'.$record->country, 'en');

                return $record;
            });
    }

    public static function columns()
    {
        return collect([
            Column::make('country', 'Country'),
            Column::make('visitors', 'Visitors', 'right'),
        ]);
    }

    private function flag(string $country): string
    {
        if ($country == 'UK') $country = 'GB';

        return (string) preg_replace_callback(
            '/./',
            static fn (array $letter) => mb_chr(ord($letter[0]) % 32 + 0x1F1E5),
            $country
        );
    }
}