<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

interface Query
{
    public function __construct(Carbon $from, Carbon $to);
    
    public function query();
    
    public function data();

    public static function title();

    public static function columns();
}