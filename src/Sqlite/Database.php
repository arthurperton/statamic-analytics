<?php

namespace ArthurPerton\Analytics\Sqlite;

use Illuminate\Database\ConnectionInterface;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Statamic\Facades\File;
use Statamic\Facades\Path;

abstract class Database
{
    protected $name;
    protected $path;
    protected $wal = false;

    public function __construct()
    {
        $this->path = Path::assemble(config("{$this->name}.database", database_path($this->name)), 'database.sqlite');

        config(["database.connections.{$this->name}" => [
            'driver' => 'sqlite',
            'database' => $this->path,
        ]]);
    }

    public function path(): string
    {
        return $this->path;
    }

    public function exists(): bool
    {
        return File::exists($this->path);
    }

    public function create($overwrite = false)
    {
        $this->connection()->disconnect();

        if ($overwrite || ! $this->exists()) {
            File::delete($this->path);
            File::delete($this->path.'-journal');
            File::delete($this->path.'-shm');
            File::put($this->path, '');
        }

        $this->createTables();

        $this->connection()->statement('PRAGMA journal_mode='.($this->wal ? 'WAL' : 'DELETE').';');
    }

    abstract public function createTables();

    public function delete()
    {
        File::delete($this->path);
    }

    public function query(callable $callback, $retry = true)
    {
        try {
            return $callback($this->connection());
        } catch (QueryException $e) {
            // TODO re-creating the database should depend on the kind of exception
            Log::error("The '{$this->name}' SQLite database seems to be corrupt and will be re-created now. Original exception: $e");

            $this->create(true);

            if ($retry) {
                return $this->query($callback, false);
            }
        }
    }

    public function connectionName(): string
    {
        return $this->name;
    }

    public function connection(): ConnectionInterface
    {
        $connection = DB::connection($this->name);
        
        $connection->statement('
            PRAGMA cache_size = -100000;
            PRAGMA temp_store = 2;
        ');

        return $connection;
    }

    public function schema(): \Illuminate\Database\Schema\Builder
    {
        return Schema::connection($this->name);
    }
}
