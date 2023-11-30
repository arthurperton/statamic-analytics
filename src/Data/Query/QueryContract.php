<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

interface QueryContract
{
    public function __construct(Carbon $from, Carbon $to, $filters);
    
    public function baseQuery();

    public function finalQuery();
    
    public function data();

    public static function title();

    public static function columnName();

    public static function columnTitle();

    // public static function columns();
}