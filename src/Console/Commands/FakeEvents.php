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

        $start = microtime(true);
        for ($i = 0; $i < $count; $i++) {
            $session = $this->createSession($startTime, $endTime);

            Database::connection()->table('sessions')->insert($session);
            
            $numberOfPageviews = $this->randomInt(1, 6);
            for ($j = 0; $j < $numberOfPageviews; $j++) {
                $pageview = $this->createPageview($startTime, $endTime);

                $pageview['session_id'] = $session['id'];

                Database::connection()->table('pageviews')->insert($pageview);
            }

        }
        $this->info(microtime(true) - $start);

        return 0;
    }

    public function createSession(int $startTime, int $endTime)
    {
        $fields = [
            'id' => ['id'],
            'anonymous_id' => ['id'],
            'source' => ['item', ['', 'google.com', 'facebook.com', 'domain1.nl', 'domain2.eu']],
            'browser' => ['item', ['Chrome', 'Edge', 'Firefox', 'Safari']],
            'browser_version' => ['int', 10, 20],
            'os' => ['item', ['Mac', 'Windows', 'iOS', 'Android']],
            'os_version' => ['int', 10, 20],
            'device' => ['item', ['Desktop', 'Mobile', 'Tablet']],
            'country' => ['item', ['NL', 'DE', 'US', 'BE', 'UK']],
            'created' => ['int', $startTime, $endTime],
        ];

        $session = [];

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