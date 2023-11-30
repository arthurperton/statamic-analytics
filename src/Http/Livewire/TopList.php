<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use ArthurPerton\Analytics\Data\Query\Query;
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
        return (new (Query::className($this->query))($from, $to))->data();
    }

    #[Computed]
    public function columnName()
    {
        return Query::className($this->query)::columnName();
    }

    #[Computed]
    public function columnTitle()
    {
        return Query::className($this->query)::columnTitle();
    }

    public function filterBy($value, $displayValue)
    {
        $this->dispatch('set-filter', [
            'value' => $value,
            'displayValue' => $displayValue,
            'column' => $this->columnName(),
            'title' => $this->columnTitle(),
        ]);
    }

    public function render()
    {
        return view('analytics::livewire.top-list');
    }
}
