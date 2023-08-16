<?php

namespace ArthurPerton\Analytics\Http\Controllers;

use Statamic\Http\Controllers\CP\CpController;

class DashboardController extends CpController
{
    public function index()
    {
        return view('analytics::dashboard', ['some' => 'data']);
    }
}
