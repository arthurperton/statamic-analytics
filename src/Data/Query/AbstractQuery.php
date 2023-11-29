<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

abstract class AbstractQuery implements Query
{
    protected Carbon $from;
    protected Carbon $to;

    public function __construct(Carbon $from, Carbon $to)
    {
        $this->from = $from;
        $this->to = $to;
    }
    
    abstract public function query();
    
    public function data()
    {
        return $this->query()->get();
    }

    public static function title()
    {
        return null;
    }

    public static function columns()
    {
        return collect();
    }
}