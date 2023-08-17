<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\GeoHelper;
use ArthurPerton\Analytics\Facades\Database;
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

        // \Log::debug($session);
        // \Log::debug($pageview);

        // Database::query(function ($db) use ($session, $pageview) {
        // /** @var \Illuminate\Database\ConnectionInterface $db */
        $db = Database::connection();

        $db->table('sessions')->upsert($session, 'id', ['modified']);

        $db->table('pageviews')->insert($pageview);
        // });
    }

    protected function prepareData(array $data)
    {
        // TODO handle fail
        $now = Carbon::now()->timestamp;

        if (is_array($data)) {
            $data = collect($data);
        }

        $properties = collect($data->get('properties'));

        $session = collect($properties->get('session'))
            ->only(['id'])//, 'created', 'modified']) // TODO or convert client time to server time
            ->put('created', $now)
            ->put('modified', $now)
            ->put('anonymous_id', $data->get('anonymousId'))
            ->put('device', Browser::deviceType())
            ->put('os', Browser::platformFamily())
            ->put('os_version', $this->normalizeVersion(Browser::platformVersion()))
            ->put('browser', Browser::browserFamily())
            ->put('browser_version', $this->normalizeVersion(Browser::browserVersion()))
            ->put('country', GeoHelper::getCountry($_SERVER['REMOTE_ADDR']));

        $pageview = $properties
            ->only(['title', 'url', 'path', 'hash', 'search'])
            ->put('session_id', $session->get('id'))
            ->put('id', $data->get('meta')['rid'])
            ->put('created', $now);
        // ->put('client_timestamp', floor($data->get('meta')['ts'] * 1e-3));

        return [$session->all(), $pageview->all()];
    }

    protected function normalizeVersion($version)
    {
        $parts = explode('.', $version);

        if (count($parts) > 1) {
            return $parts[0].'.'.$parts[1];
        }

        return $version;
    }
}
