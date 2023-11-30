<?php

namespace ArthurPerton\Analytics\Data;

use ArthurPerton\Analytics\Facades\Database;
use Carbon\Carbon;

class EventsHelper
{
    public static function activeSession($anonymousId, $now = null)
    {
        $now = $now ?? Carbon::now()->getTimestamp();

        return Database::connection()
            ->table('session')
            ->select()
            ->where('anonymous_id', $anonymousId)
            ->where('modified', '>', $now - 30 * 60)
            ->first();
    }
}
