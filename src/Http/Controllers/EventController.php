<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use ArthurPerton\Analytics\Data\EventsHelper;
use ArthurPerton\Analytics\Data\GeoHelper;
use ArthurPerton\Analytics\Facades\Database;
use Browser;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Request;
use Statamic\Http\Controllers\CP\CpController;

class EventController extends CpController
{
    public function store(\Illuminate\Http\Request $request)
    {
        $data = $request->json()->all();

        [$session, $pageview] = $this->prepareData($data);

        // Database::query(function ($db) use ($session, $pageview) {
        // /** @var \Illuminate\Database\ConnectionInterface $db */
        $db = Database::connection();

        $db->table('session')->upsert($session, 'id', ['session_ended_at']);

        if (array_get($data, 'type') === 'load') {
            $db->table('pageview')->insert($pageview);
        }
        if (array_get($data, 'type') === 'unload') {
            $db->table('pageview')->where('id', array_get($data, 'id'))->update($pageview);
        }    
        // });
    }

    protected function prepareData($data)
    {
        // TODO handle fails

        $now = Carbon::now()->timestamp;

        $anonymousId = $this->createAnonymousId();

        // TODO Check if there is an active session for this anonymous id.
        $activeSession = EventsHelper::activeSession($anonymousId);
        $sessionId = $activeSession ? $activeSession->id : uniqid();

        $session = [
            'id' => $sessionId,
            'session_started_at' => $now,
            'session_ended_at' => $now,
            'anonymous_id' => $anonymousId,
            'source' => $data['referrer'] ? parse_url($data['referrer'], PHP_URL_HOST): null,
            'device' => Browser::deviceType(),
            'os' => Browser::platformFamily(),
            'os_version' => $this->normalizeVersion(Browser::platformVersion()),
            'browser' => Browser::browserFamily(),
            'browser_version' => $this->normalizeVersion(Browser::browserVersion()),
            'country' => GeoHelper::getCountry(),
        ];

        // TODO multi-site
        $path = parse_url($data['url'], PHP_URL_PATH);
        
        $type = array_get($data, 'type');

        if ($type === 'load') {
            $pageview = [
                'id' => array_get($data, 'id'),
                'title' => array_get($data, 'title'),
                'path' => $path,
                'referrer_path' => $data['referrer'] ? parse_url($data['referrer'], PHP_URL_PATH): null,
                'session_id' => $sessionId,
                'started_at' => $now,
                'ended_at' => $now, 
            ];
        } elseif ($type === 'unload') {
            $pageview = [
                'ended_at' => $now,
            ];
        }

        return [$session, $pageview];
    }

    protected function createAnonymousId()
    {
        // See https://plausible.io/data-policy#how-we-count-unique-users-without-cookies
        $salt = $this->dailySalt();
        $domain = ''; // Request::getHost();
        $ip = Request::ip();
        $userAgent = Request::userAgent();

        return hash('sha256', $salt.$domain.$ip.$userAgent);
    }

    protected function dailySalt()
    {
        $seconds = Carbon::now()->secondsUntilEndOfDay();

        // TODO use storage; cache might get cleared
        return Cache::remember('statamic-analytics-salt', $seconds, function () {
            return uniqid();
        });
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
