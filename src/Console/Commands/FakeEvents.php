<?php

namespace ArthurPerton\Analytics\Console\Commands;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class FakeEvents extends Fake
{
    protected $signature = 'analytics:fake-events
            {start : Start date and time}
            {end : End date and time}
            {count : Number of sessions}
            {--truncate : Truncate table first }
        ';

    protected $description = 'Fills the database with fake reports for testing purposes';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        if ($this->option('truncate')) {
            Database::connection()->table('pageviews')->truncate();
            Database::connection()->table('sessions')->truncate();
        }

        $startTime = Carbon::parse($this->argument('start'))->timestamp;
        $endTime = Carbon::parse($this->argument('end'))->timestamp;
        $count = (int) $this->argument('count');

        $anonymousIds = [];
        $anonymousIdsCount = floor($count / 5);//($this->randomFloat(1, 5)));
        for ($i = 0; $i < $anonymousIdsCount; $i++) {
            $anonymousIds[] = uniqid();
        }

        $sessions = collect();
        $pageviews = collect();

        $start = microtime(true);
        for ($i = 0; $i < $count; $i++) {
            $session = $this->createSession($startTime, $endTime, $this->randomItem($anonymousIds));

            $sessionPageviews = collect();
            $numberOfPageviews = $this->randomInt(1, 6);
            for ($j = 0; $j < $numberOfPageviews; $j++) {
                $pageview = $this->createPageview($session['started_at'], $session['started_at'] + $this->randomInt(0, 30 * 60));

                $pageview['session_id'] = $session['id'];

                $sessionPageviews->add($pageview);
                $pageviews->add($pageview);
            }

            $session['entry_pageview_id'] = $sessionPageviews->sortBy('started_at')->first()['id'];
            $session['exit_pageview_id'] = $sessionPageviews->sortBy('started_at')->last()['id'];
            $session['started_at'] = $sessionPageviews->min('started_at');
            $session['ended_at'] = $sessionPageviews->max('ended_at');

            $sessions->add($session);

            if ($pageviews->count() > 50000 || $i == $count - 1) {
                Database::connection()->table('sessions')->insert($sessions->all());
                Database::connection()->table('pageviews')->insert($pageviews->all());

                $sessions = collect();
                $pageviews = collect();
            }
        }
        $this->info(microtime(true) - $start);

        return 0;
    }

    public function createSession(int $startTime, int $endTime, string $anonymousId = null)
    {
        $anonymousId = $anonymousId ?? uniqid();

        $fields = [
            'id' => ['id'],
            'source' => ['item', ['', 'google.com', 'facebook.com', 'domain1.nl', 'domain2.eu']],
            'browser' => ['item', ['Chrome', 'Edge', 'Firefox', 'Safari']],
            'browser_version' => ['int', 10, 20],
            'os' => ['item', ['Mac', 'Windows', 'iOS', 'Android']],
            'os_version' => ['int', 10, 20],
            'device' => ['item', ['Desktop', 'Mobile', 'Tablet']],
            'country' => ['item', ['NL', 'DE', 'US', 'BE', 'UK']],
            'started_at' => ['int', $startTime, $endTime],
        ];

        $session = [
            'anonymous_id' => $anonymousId,
        ];

        foreach ($fields as $field => $config) {
            $session[$field] = $this->randomValue($config);
        }
        
        $session['ended_at'] = $session['started_at'] + $this->randomInt(0, 30 * 60);

        return $session;
    }

    public function createPageview(int $startTime, int $endTime)
    {
        $paths = ['/', '/about', '/blog', '/blog/post-1', '/blog/post-2', '/contact'];

        $pageview = [
            'id' => $this->randomId(),
            'path' => $this->randomItem($paths),
            'started_at' => $this->randomInt($startTime, $endTime),
        ];

        $pageview['ended_at'] = $pageview['started_at'] + $this->randomInt(0, 3 * 60);

        return $pageview;
    }
}