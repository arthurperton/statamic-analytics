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

        if (! $schema->hasTable('session')) {
            $schema->create('session', function (Blueprint $table) {
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
                $table->unsignedInteger('started_at');
                $table->unsignedInteger('ended_at');

                $table->index('started_at');
            });
        }

        if (! $schema->hasTable('pageview')) {
            $schema->create('pageview', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->string('session_id');
                $table->foreign('session_id')->references('id')->on('session');
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
            CREATE VIEW v_session
            AS
            SELECT      session.*,
                        count(*) AS pageview_count
            FROM        session
            LEFT JOIN   pageview
            ON          session.id = pageview.session_id
            GROUP BY    session.id
        ');

        $this->connection()->statement('
            CREATE VIEW v_pageview
            AS
            SELECT      pageview.*,
                        session.anonymous_id,
                        session.source,
                        session.browser,
                        session.browser_version,
                        session.os,
                        session.os_version,
                        session.device,
                        session.country,
                        session.region,
                        session.city
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
