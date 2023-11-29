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

    #[Reactive]
    public $filters = [];
   
    public $decimals = 0;

    public $title;
    
    public $query;

    public $unit;

    public $selected;

    #[Computed]
    public function value()
    {
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);
        return (new ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query)($from, $to, $this->filters))->data();
    }

    public function render()
    {
        return view('analytics::livewire.aggregate');
    }
}
