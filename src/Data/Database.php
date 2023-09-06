<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Sqlite\Database as SqliteDatabase;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

class Database extends SqliteDatabase
{
    protected $name = 'analytics';
    protected $wal = true;

    public function createTables()
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

                $table->string('source')->nullable(); // TODO move /copy to page?

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

                // TODO indices?
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
                // $table->string('hash')->nullable();
                // $table->string('search')->nullable();

                $table->unsignedInteger('created');

                // TODO indices?
            });
        }

        if (! $schema->hasTable('v_sessions_pageviews')) {
            DB::statement('
                CREATE VIEW v_sessions_pageviews
                AS
                SELECT      session_id,
                            sessions.created, 
                            count(*) AS pageview_count
                FROM        sessions
                LEFT JOIN   pageviews
                ON          sessions.id = pageviews.session_id
                GROUP BY    session_id
                ORDER BY    session_id
            ');
        }
    }
}
