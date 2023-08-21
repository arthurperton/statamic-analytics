<?php

namespace ArthurPerton\Analytics\Console\Commands;

use Illuminate\Console\Command;

abstract class Fake extends Command
{
    protected function randomValue($config)
    {
        $type = array_shift($config);

        $method = 'random'.ucfirst($type);

        return $this->{$method}(...$config);
    }

    protected function randomId()
    {
        return uniqid();
    }

    protected function randomItem($array)
    {
        return array_rand(array_flip($array));
    }

    protected function randomInt($min, $max)
    {
        return mt_rand($min, $max);
    }

    protected function randomFloat($min, $max)
    {
        return $min + ($max - $min) * mt_rand() / mt_getrandmax();
    }
}
