<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Sqlite\Database as SqliteDatabase;
use Illuminate\Database\Schema\Blueprint;

class Database extends SqliteDatabase
{
    protected $name = 'analytics';
    protected $wal = true;

    public function createTables($schema)
    {
        // TODO versioning / migrations

        $schema->create('ip2geo', function (Blueprint $table) {
            $table->string('ip_from');
            $table->string('ip_to');
            $table->string('country');

            // TODO indices
        });

        $schema->create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();

            $table->string('anonymous_id');

            $table->string('referrer')->nullable(); // TODO move /copy to page?

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

            $table->string('title')->nullable();

            $table->string('url')->nullable();
            $table->string('path');
            // $table->string('hash')->nullable();
            // $table->string('search')->nullable();

            $table->unsignedInteger('created');

            // TODO indices
        });
    }
}
