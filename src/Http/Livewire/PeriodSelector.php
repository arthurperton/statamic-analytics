<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Livewire\Attributes\Modelable;
use Livewire\Component;
 
class PeriodSelector extends Component
{
    #[Modelable]
    public $period;

    public function render()
    {
        return view('analytics::livewire.period-selector');
    }
}
