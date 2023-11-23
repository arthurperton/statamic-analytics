<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Carbon\Carbon;
use Livewire\Attributes\Computed;
use Livewire\Attributes\Reactive;
use Livewire\Component;
 
class Aggregate extends Component
{
    #[Reactive]
    public $period;
    
    public $title;
    
    public $query;

    public $decimals = 0;

    public $unit;

    #[Computed]
    public function value()
    {
        // return "THE PERIOD IS ".$this->period;
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);
        return (new ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query))->query($from, $to)->value('value');
    }

    public function render()
    {
        return view('analytics::livewire.aggregate');
    }
}
