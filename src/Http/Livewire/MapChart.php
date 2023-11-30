<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Livewire\Attributes\Reactive;
use Livewire\Component;

class MapChart extends Component
{
    #[Reactive]
    public $period;

    #[Reactive]
    public $filters = [];

    public function render()
    {
        return view('analytics::livewire.map-chart');
    }
}