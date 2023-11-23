<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

interface Query
{
    public function query(Carbon $from, Carbon $to);
}