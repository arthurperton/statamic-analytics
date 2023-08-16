<?php

namespace ArthurPerton\Analytics\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static string function path()
 * @method static bool exists(): bool
 * @method static void create($overwrite = false)
 * @method static void delete()
 * @method static void query($callback, $retry = true)
 * @method static string connectionName()
 * @method static \Illuminate\Database\ConnectionInterface connection()
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