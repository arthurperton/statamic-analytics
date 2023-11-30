<?php

namespace ArthurPerton\Analytics\Data\Query;

use ArthurPerton\Analytics\Facades\Database;
use Locale;

class TopCountries extends AbstractQuery
{
    public function baseQuery()
    {
        return Database::connection()->table('sessions')
            ->distinct('anonymous_id')
            ->selectRaw("
                CASE country 
                    WHEN NULL THEN 'ZZ'
                    ELSE TRIM(country, CHAR(10))
                END value, 
                COUNT(*) AS visitors
            ")
            // ->whereNotNull('country')
            ->where('created', '>=', $this->from->getTimestamp())
            ->where('created', '<', $this->to->getTimestamp())
            ->groupBy('value')
            ->orderBy('visitors', 'desc')
            ->orderBy('value', 'asc');
    }

    public function data()
    {
        return $this->baseQuery()->get()
            ->map(function ($record) {
                $record->icon = $this->flag($record->value);

                $record->displayValue = $record->value == 'ZZ'
                    ? 'Unknown'
                    : Locale::getDisplayRegion('-'.$record->value, 'en');

                return $record;
            });
    }

    public static function columnName()
    {
        return 'country';
    }

    public static function columnTitle()
    {
        return 'Country';
    }

    private function flag(string $country): string
    {
        if ($country == 'ZZ') return '&nbsp;';
        if ($country == 'UK') $country = 'GB';

        return (string) preg_replace_callback(
            '/./',
            static fn (array $letter) => mb_chr(ord($letter[0]) % 32 + 0x1F1E5),
            $country
        );
    }
}