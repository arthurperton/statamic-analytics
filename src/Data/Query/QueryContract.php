<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

interface QueryContract
{
    public function from(Carbon|int $from): QueryContract;

    public function to(Carbon|int $to): QueryContract;

    public function filters(array $filters): QueryContract;

    public function limit(int $limit): QueryContract;

    public function remember(string|int $duration): QueryContract;

    public function fromTimestamp(): int;
    
    public function toTimestamp(): int;

    public function baseQuery(): ?\Illuminate\Database\Query\Builder;

    public function finalQuery(): \Illuminate\Database\Query\Builder;

    public function data();

    public static function title(): string;

    public static function columnName(): string;

    public static function columnTitle(): string;
}
