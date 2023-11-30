<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

abstract class AbstractQuery implements QueryContract
{
    protected Carbon $from;
    protected Carbon $to;
    protected array $filters = [];
    protected int $limit;

    public function from($from): QueryContract
    {
        $this->from = $from;

        return $this;
    }

    public function to($to): QueryContract
    {
        $this->to = $to;

        return $this;
    }

    public function filters($filters): QueryContract
    {
        $this->filters = $filters;

        return $this;
    }

    public function limit($limit): QueryContract
    {
        $this->limit = $limit;

        return $this;
    }
    
    public function baseQuery(): \Illuminate\Database\Query\Builder | null
    {
        return null;
    }

    public function finalQuery(): \Illuminate\Database\Query\Builder
    {
        $query = $this->baseQuery();

        $this->applyFilters($query);
        $this->applyLimit($query);

        return $query;
    }
    
    public function data()
    {
        return $this->finalQuery()->get();
    }

    public static function title(): string
    {
        return '';
    }

    public static function columnName(): string
    {
        return '';
    }

    public static function columnTitle(): string
    {
        return '';
    }

    public static function columns()
    {
        return collect();
    }

    protected function applyFilters(\Illuminate\Database\Query\Builder $query)
    {
        collect($this->filters)->each(function ($filter) use ($query) {
            $query->where($filter['column'], $filter['value']);
        });

        return $query;
    }

    protected function applyLimit(\Illuminate\Database\Query\Builder $query)
    {
        if (isset($this->limit)) {
            $query->limit($this->limit);
        }

        return $query;
    }
}