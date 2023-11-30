<?php

namespace ArthurPerton\Analytics\Data\Query;

use Carbon\Carbon;

class Query
{
    public static function make($name): QueryContract
    {
        return new ("\\ArthurPerton\\Analytics\\Data\\Query\\$name");
    }

    public static function className($name): string
    {
        return "\\ArthurPerton\\Analytics\\Data\\Query\\$name";
    }
}
