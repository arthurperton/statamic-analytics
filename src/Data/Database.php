<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Sqlite\Database as SqliteDatabase;
use Illuminate\Database\Schema\Blueprint;

class Database extends SqliteDatabase
{
    protected $name = 'analytics';
    protected $wal = true;

    public function setMeta(string $key, mixed $value)
    {
        $this->connection()->table('meta')
            ->upsert(['key' => $key, 'value' => $value], ['key'], ['value']);
    }

    public function getMeta(string $key, mixed $fallback = null)
    {
        $this->connection()->table('meta')
            ->select('value')
            ->where('key', $key)
            ->value('value') ?? $fallback;
    }

    public function createTables()
    {
        $this->createTablesStep1();
        $this->createTablesStep2();
    }

    protected function createTablesStep1()
    {
        $schema = $this->schema();

        if (! $schema->hasTable('dummy')) {
            $schema->create('dummy', function (Blueprint $table) {
                $table->id('id');
            });
        }

        if (! $schema->hasTable('meta')) {
            $schema->create('meta', function (Blueprint $table) {
                $table->string('key');
                $table->string('value');

                $table->unique('key');
            });
        }

        if (! $schema->hasTable('ip2geo')) {
            $schema->create('ip2geo', function (Blueprint $table) {
                $table->string('ip_from');
                $table->string('ip_to');
                $table->string('country');

                $table->unique(['ip_from', 'ip_to']);
            });
        }

        if (! $schema->hasTable('session')) {
            $schema->create('session', function (Blueprint $table) {
                $table->string('id');
                $table->string('anonymous_id');
                $table->string('source')->nullable();
                $table->string('browser');
                $table->string('browser_version');
                $table->string('os');
                $table->string('os_version');
                $table->string('device');
                $table->string('country')->nullable();
                $table->string('region')->nullable();
                $table->string('city')->nullable();
                $table->string('entry_pageview_id')->nullable();
                $table->string('exit_pageview_id')->nullable();
                $table->unsignedInteger('session_started_at');
                $table->unsignedInteger('session_ended_at');

                $table->unique('id');
                $table->index('anonymous_id');
                $table->index('session_started_at');
            });
        }

        if (! $schema->hasTable('pageview')) {
            $schema->create('pageview', function (Blueprint $table) {
                $table->string('id');
                $table->string('session_id');
                $table->foreign('session_id')->references('id')->on('session');
                $table->string('title')->nullable();
                $table->string('url')->nullable();
                $table->string('path');
                $table->string('referrer_path')->nullable();
                $table->unsignedInteger('started_at');
                $table->unsignedInteger('ended_at');

                $table->unique('id');
                $table->index('session_id');
                $table->index('started_at');
            });
        }

        $this->schema()->dropAllViews();

        $this->connection()->statement('
            CREATE VIEW v_session
            AS
            SELECT      session.*
            ,           count(*) AS pageview_count
            FROM        session
            LEFT JOIN   pageview
            ON          session.id = pageview.session_id
            GROUP BY    session.id
        ');

        $this->connection()->statement('
            CREATE VIEW v_pageview
            AS
            SELECT      pageview.*
            ,           anonymous_id
            ,           source
            ,           browser
            --,           browser_version
            ,           os
            --,           os_version
            ,           device
            ,           country
            --,           region
            --,           city
            ,           session_started_at
            ,           session_ended_at
            FROM        pageview
            LEFT JOIN   session
            ON          pageview.session_id = session.id
        ');
    }

    protected function createTablesStep2()
    {
        // Add changes to the existing database here.
    }
}
