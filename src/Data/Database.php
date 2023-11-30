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

                $table->unsignedInteger('created');
                $table->unsignedInteger('modified');

                $table->index('created');
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

                $table->unsignedInteger('created');

                $table->index('created');
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
            ORDER BY    sessions.id
        ');
    }

    protected function createTablesStep2()
    {
        // Add changes to the existing database here.
    }
}
