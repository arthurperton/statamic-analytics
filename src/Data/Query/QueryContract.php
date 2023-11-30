<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

interface QueryContract
{
    // public function __construct(Carbon $from, Carbon $to, $filters);

    public function from($from): QueryContract;

    public function to($to): QueryContract;

    public function filters($filters): QueryContract;

    public function limit($limit): QueryContract;
    
    public function baseQuery(): \Illuminate\Database\Query\Builder | null;

    public function finalQuery(): \Illuminate\Database\Query\Builder;
    
    public function data();

    public static function title(): string;

    public static function columnName(): string;

    public static function columnTitle(): string;
}