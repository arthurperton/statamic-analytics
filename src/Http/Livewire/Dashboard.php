<?php

namespace ArthurPerton\Analytics\Http\Livewire;
 
use Livewire\Component;
 
class Dashboard extends Component
{
    public $period = 7;

    public function render()
    {
        return view('analytics::livewire.dashboard');
    }
}
