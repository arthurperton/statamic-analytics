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
    public $statistic = false;
   
    public $decimals = 0;

    public $title;
    
    public $query;

    public $unit;


    #[Computed]
    public function value()
    {
        // return "THE PERIOD IS ".$this->period;
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);
        return (new ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query)($from, $to))->data();
    }

    #[Computed]
    public function active()
    {
        return $this->query == $this->statistic;
    }

    public function select()
    {
        $this->dispatch('select-statistic', $this->query);
    }

    public function render()
    {
        return view('analytics::livewire.aggregate');
    }
}
