<?php

namespace ArthurPerton\Analytics\Data\Query;

class Column
{
    public $name;
    public $display;
    public $align;

    public static function make($name, $display, $align = 'left')
    {
        $column = new static();
        
        $column->name = $name;
        $column->display = $display;
        $column->align = $align;

        return $column;
    }
}
