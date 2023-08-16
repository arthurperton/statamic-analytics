<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Sqlite\Database as SqliteDatabase;
use Illuminate\Database\Schema\Blueprint;

class Database extends SqliteDatabase
{
    protected $name = 'whosthere';
    protected $wal = true;

    public function createTables($schema)
    {
        $schema->create('sessions', function (Blueprint $table) {
            $table->string('ip_begin');
            $table->string('ip_end');
            $table->string('country');

            // TODO indices
        });

        $schema->create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();

            $table->string('anonymous_id');

            $table->string('browser');
            $table->string('browser_version');
            $table->string('os');
            $table->string('os_version');
            $table->string('device'); // desktop, mobile

            $table->string('country')->nullable();
            $table->string('region')->nullable();
            $table->string('city')->nullable();

            $table->unsignedInteger('created');
            $table->unsignedInteger('modified');

            // TODO indices
        });

        $schema->create('pageviews', function (Blueprint $table) {
            $table->string('id')->primary();

            $table->string('session_id');
            $table->foreign('session_id')->references('id')->on('sessions');

            $table->string('title');

            $table->string('url');
            $table->string('path');
            $table->string('hash')->nullable();
            $table->string('search')->nullable();

            $table->unsignedInteger('created');

            // TODO indices
        });
    }
}
