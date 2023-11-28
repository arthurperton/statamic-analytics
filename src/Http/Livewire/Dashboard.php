<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Livewire\Attributes\On;
use Livewire\Component;
 
class Dashboard extends Component
{
    public $period = 7;

    public $statistic = 'UniqueVisitors';

    #[On('select-statistic')] 
    public function setStatistic($statistic)
    {
        $this->statistic = $statistic;
    }

    public function render()
    {
        return view('analytics::livewire.dashboard');
    }
}
