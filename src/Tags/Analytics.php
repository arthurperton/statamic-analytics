<?php

namespace ArthurPerton\Analytics\Tags;

use ArthurPerton\Analytics\Data\Query\Query;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Statamic\Facades\Entry;
use Statamic\Facades\URL;
use Statamic\Fields\Value;
use Statamic\Tags\Tags;

class Analytics extends Tags
{
    public function index()
    {
        return $this->getValue();
    }

    protected function getValue()
    {
        $to = Carbon::now();
        $from = Carbon::create(1970, 1, 1);

        return Query::make('UniqueVisitors')
            ->from($from)
            ->to($to)
            ->filters([[
                'column' => 'path',
                'value' => $this->getUrl(),
            ]])
            ->data();
    }

    protected function getUrl()
    {
        if ($url = array_get($this->params, 'url')) {
            return $url;
        }

        if ($id = $this->getId()) {
            $entry = Entry::find($id);
            // TODO handle not found

            return $entry->url();
        }

        return URL::getCurrent();
    }

    protected function getId()
    {
        $id = $this->params['id'] ?? $this->context['id'] ?? null;

        if ($id instanceof Value) {
            $id = $id->value();
        }

        return $id;
    }

    protected function getTtl()
    {
        if ($length = array_get($this->params, 'for')) {
            now()->add('+'.$length);
        }

        return 3600;
    }
}
