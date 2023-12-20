<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

abstract class AbstractQuery implements QueryContract
{
    protected Carbon $from;
    protected Carbon $to;
    protected array $filters = [];
    protected int $limit = -1;
    protected $remember = 0;

    public function from(Carbon|int $from): QueryContract
    {
        $this->from = $from instanceof Carbon
            ? $from
            : Carbon::createFromTimestamp($from);

        return $this;
    }

    public function to(Carbon|int $to): QueryContract
    {
        $this->to = $to instanceof Carbon
            ? $to
            : Carbon::createFromTimestamp($to);

        return $this;
    }

    public function filters(array $filters): QueryContract
    {
        $this->filters = $filters;

        return $this;
    }

    public function limit(int $limit): QueryContract
    {
        $this->limit = $limit;

        return $this;
    }

    public function remember(string|int $duration): QueryContract
    {
        $this->remember = $duration;

        return $this;
    }

    public function fromTimestamp(): int
    {
        return $this->from->timestamp;
    }
    
    public function toTimestamp(): int
    {
        return $this->to->timestamp;
    }

    public function baseQuery(): ?\Illuminate\Database\Query\Builder
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

    protected function fetchData()
    {
        return $this->finalQuery()->get();
    }

    final public function data()
    {
        return Cache::remember($this->cacheKey(), $this->remember, function () {
            // $start = microtime(true);
            $data = $this->fetchData();
            // $duration = microtime(true) - $start;
            // \Log::debug("$duration seconds for query ".get_class($this));

            return $data;
        });
    }

    protected function cacheKey()
    {
        $filters = $this->filters;
        usort($filters, fn ($a, $b) => ($a['column'] < $b['column']) ? -1 : 1);

        return 'analytics:query.'.md5(json_encode([
            'query' => get_class($this),
            'from' => $this->fromTimestamp(),
            'to' => $this->toTimestamp(),
            'filters' => $filters,
            'limit' => $this->limit,
        ]));
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
        if ($this->limit >= 0) {
            $query->limit($this->limit);
        }

        return $query;
    }
}
