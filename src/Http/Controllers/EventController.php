<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Http\Controllers\CP\CpController;

class EventController extends CpController
{
    public function store(Request $request)
    {
        $data = $request->json()->all();

        \Log::debug($data);

    //     $object = (object) $data;

    //     \Log::debug($object->type);
    //     \Log::debug($object->anonymousId);
    //     \Log::debug($object->friedOnions ?? 'no fried onions');
    }
}
