<?php

namespace ArthurPerton\Analytics\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static string|null getMeta(string $key, mixed $fallback = null))
 * @method static void setMeta(string $key, mixed $value)
 * @method static string path()
 * @method static bool exists(): bool
 * @method static void create($overwrite = false)
 * @method static void createTables()
 * @method static void delete()
 * @method static void query($callback, $retry = true)
 * @method static string connectionName()
 * @method static \Illuminate\Database\ConnectionInterface connection()
 * @method static \Illuminate\Database\Schema\Builder schema()
 *
 * @see \ArthurPerton\Analytics\Data\Database
 */
class Database extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \ArthurPerton\Analytics\Data\Database::class;
    }
}
