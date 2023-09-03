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

            // Database::connection()->table('sessions')->insert($session);
            $sessions->add($session);
            
            $numberOfPageviews = $this->randomInt(1, 6);
            for ($j = 0; $j < $numberOfPageviews; $j++) {
                $pageview = $this->createPageview($startTime, $endTime);

                $pageview['session_id'] = $session['id'];

                // Database::connection()->table('pageviews')->insert($pageview);
                $pageviews->add($pageview);
            }

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
            'created' => ['int', $startTime, $endTime],
        ];

        $session = [
            'anonymous_id' => $anonymousId,
        ];

        foreach ($fields as $field => $config) {
            $session[$field] = $this->randomValue($config);
        }
        
        $session['modified'] = $session['created'];
        if ($this->randomFloat(0, 1) > 0.3) {
            $session['modified'] = $session['created'] + $this->randomInt(0, 30 * 60);
        }

        return $session;
    }

    public function createPageview(int $startTime, int $endTime)
    {
        $paths = ['/', '/about', '/blog', '/blog/post-1', '/blog/post-2', '/contact'];

        return [
            'id' => $this->randomId(),
            'path' => $this->randomItem($paths),
            'created' => $this->randomInt($startTime, $endTime),
        ];
    }
}