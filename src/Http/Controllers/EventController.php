<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use Browser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Statamic\Http\Controllers\CP\CpController;

class EventController extends CpController
{
    public function store(Request $request)
    {
        $data = $request->json()->all();

        [$session, $pageview] = $this->prepareData($data);

        \Log::debug($session);
        \Log::debug($pageview);
    }

    protected function prepareData(array $data)
    {
        // TODO handle fail
        
        if (is_array($data)) {
            $data = collect($data);
        }

        $properties = collect($data->get('properties'));

        $session = collect($properties->get('session'))
            ->only(['id', 'created', 'modified']) // TODO change to server time
            ->put('anonymous_id', $data->get('anonymousId'))
            ->put('device', Browser::deviceType())
            ->put('os', Browser::platformFamily())
            ->put('os_version', Browser::platformVersion())
            ->put('browser', Browser::browserFamily())
            ->put('browser_version', Browser::browserVersion());

        $pageview = $properties
            ->only(['title', 'url', 'path', 'hash', 'search'])
            ->put('session_id', $session->get('id'))
            ->put('id', $data->get('meta')['rid'])
            ->put('created', Carbon::now()->timestamp);
            // ->put('client_timestamp', floor($data->get('meta')['ts'] * 1e-3));

        return [$session, $pageview];
    }
}
