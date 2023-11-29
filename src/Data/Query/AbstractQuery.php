<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

abstract class AbstractQuery implements Query
{
    protected Carbon $from;
    protected Carbon $to;
    protected $filters;

    public function __construct(Carbon $from, Carbon $to, $filters = [])
    {
        $this->from = $from;
        $this->to = $to;
        $this->filters = collect($filters);
    }
    
    abstract public function query();

    public function finalQuery()
    {
        return $this->applyFilters($this->query());
    }
    
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

    protected function applyFilters($query)
    {
        $this->filters->each(function ($filter) use ($query) {
            $query->where($filter['column'], $filter['value']);
        });

        return $query;
    }
}