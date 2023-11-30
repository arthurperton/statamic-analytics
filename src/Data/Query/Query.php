<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

class Query
{
    public static function className($name)
    {
        return "\\ArthurPerton\\Analytics\\Data\\Query\\$name";
    }
}
