<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Carbon\Carbon;
use Livewire\Attributes\Computed;
use Livewire\Attributes\Reactive;
use Livewire\Component;

class TopList extends Component
{
    #[Reactive]
    public $period;

    public $query;

    #[Computed]
    public function items()
    {
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);
        return (new ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query)($from, $to))->data();
    }

    #[Computed]
    public function columns()
    {
        return ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query)::columns();
    }

    public function filterBy($value)
    {
        $column = $this->columns()[0];
        $this->dispatch('set-filter', ['value' => $value, 'column' => $column->name, 'title' => $column->display]);
    }

    public function render()
    {
        return view('analytics::livewire.top-list');
    }
}
