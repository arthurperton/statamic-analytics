<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

abstract class AbstractQuery implements QueryContract
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
    
    abstract public function baseQuery();

    public function finalQuery()
    {
        return $this->applyFilters($this->baseQuery());
    }
    
    public function data()
    {
        return $this->baseQuery()->get();
    }

    public static function title()
    {
        return null;
    }

    public static function columnName()
    {
        return null;
    }

    public static function columnTitle()
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