<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Livewire\Attributes\On;
use Livewire\Component;
 
class Dashboard extends Component
{
    public $period = 7;

    public $statistic = 'UniqueVisitors';

    public $filters = [];

    #[On('set-statistic')] 
    public function setStatistic($statistic)
    {
        $this->statistic = $statistic;
    }

    #[On('set-filter')]
    public function setFilter($filter)
    {
        $this->filters[$filter['column']] = $filter;
    }

    public function removeFilter($column)
    {
        unset($this->filters[$column]);
    }

    public function render()
    {
        return view('analytics::livewire.dashboard');
    }
}
