<?php

namespace ArthurPerton\Analytics\Http\Livewire;
 
use Livewire\Component;
 
class Chart extends Component
{
    public $period = 7;

    // public function setPeriod()
    public function render()
    {
        return view('analytics::livewire.chart');
    }

    public function updated($property)
    { 
        if ($property === 'period') {
            $this->dispatch('updated.period', $this->period);
        }
    }
}
