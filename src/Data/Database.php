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
        $schema->create('pages', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('anonymous_id');
            $table->string('title');
            $table->string('url');
            $table->string('path');
            $table->string('hash');
            $table->string('search');
            $table->string('rid');
            $table->unsignedInteger('created');

        });
    }
}
