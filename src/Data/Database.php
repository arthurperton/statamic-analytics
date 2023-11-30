<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Sqlite\Database as SqliteDatabase;
use Illuminate\Database\Schema\Blueprint;

class Database extends SqliteDatabase
{
    protected $name = 'analytics';
    protected $wal = true;

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

        if (! $schema->hasTable('ip2geo')) {
            $schema->create('ip2geo', function (Blueprint $table) {
                $table->string('ip_from');
                $table->string('ip_to');
                $table->string('country');

                $table->unique(['ip_from', 'ip_to']);
            });
        }

        if (! $schema->hasTable('sessions')) {
            $schema->create('sessions', function (Blueprint $table) {
                $table->string('id')->primary();
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
                $table->string('entry_pageview_id');
                $table->string('exit_pageview_id');
                $table->unsignedInteger('session_started_at');
                $table->unsignedInteger('session_ended_at');

                $table->index('session_started_at');
            });
        }

        if (! $schema->hasTable('pageviews')) {
            $schema->create('pageviews', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->string('session_id');
                $table->foreign('session_id')->references('id')->on('sessions');
                $table->string('title')->nullable();
                $table->string('url')->nullable();
                $table->string('path');
                $table->string('referrer_path')->nullable();
                $table->unsignedInteger('started_at');
                $table->unsignedInteger('ended_at');

                $table->index('started_at');
            });
        }

        $this->schema()->dropAllViews();

        $this->connection()->statement('
            CREATE VIEW v_sessions
            AS
            SELECT      sessions.*,
                        count(*) AS pageview_count
            FROM        sessions
            LEFT JOIN   pageviews
            ON          sessions.id = pageviews.session_id
            GROUP BY    sessions.id
        ');

        $this->connection()->statement('
            CREATE VIEW v_pageviews
            AS
            SELECT      pageviews.*,
                        sessions.anonymous_id,
                        sessions.source,
                        sessions.browser,
                        sessions.browser_version,
                        sessions.os,
                        sessions.os_version,
                        sessions.device,
                        sessions.country,
                        sessions.region,
                        sessions.city,
                        sessions.session_started_at,
                        sessions.session_ended_at
            FROM        pageviews
            LEFT JOIN   sessions
            ON          pageviews.session_id = sessions.id
        ');
    }

    protected function createTablesStep2()
    {
        // Add changes to the existing database here.
    }
}
