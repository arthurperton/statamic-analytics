<?php

namespace ArthurPerton\Analytics\Http\Livewire;
 
use Livewire\Component;
 
class Counter extends Component
{
    public $count = 0;
 
    public function increment()
    {
        $this->count++;

        $this->dispatch('dataUpdated', $this->count);
    }

    public function render()
    {
        return view('analytics::livewire.counter');
    }
}
