<?php

namespace ArthurPerton\Analytics\Tags;

use ArthurPerton\Analytics\Data\Query\Query;
use Carbon\Carbon;
use Statamic\Facades\Entry;
use Statamic\Facades\URL;
use Statamic\Fields\Value;
use Statamic\Support\Arr;
use Statamic\Tags\Tags;

class Analytics extends Tags
{
    public function index()
    {
        return $this->value();
    }

    protected function value()
    {
        return Query::make('UniqueVisitors')
            ->from($this->from())
            ->to($this->to())
            ->filters([[
                'column' => 'path',
                'value' => $this->url(),
            ]])
            ->remember($this->remember())
            ->data();
    }

    protected function url()
    {
        if ($url = Arr::get($this->params, 'url')) {
            return $url;
        }

        if ($id = $this->id()) {
            /** @var \Statamic\Entries\Entry $entry */
            throw_unless($entry = Entry::find($id), new \Exception("Entry [$id] does not exist."));

            return $entry->url();
        }

        return URL::getCurrent();
    }

    protected function id()
    {
        $id = $this->params['id'] ?? $this->context['id'] ?? null;

        if ($id instanceof Value) {
            $id = $id->value();
        }

        return $id;
    }

    protected function from()
    {
        $from = Arr::get($this->params, 'from');

        return $from ? Carbon::parse($from) : Carbon::createFromTimestamp(0);
    }

    protected function to()
    {
        $to = Arr::get($this->params, 'to');

        return $to ? Carbon::parse($to) : Carbon::now();
    }

    protected function remember()
    {
        $length = Arr::get($this->params, 'remember', '1 day');

        return now()->add('+'.$length);
    }
}
