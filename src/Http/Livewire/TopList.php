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

    public $title;

    public $queries;

    public $query;

    public function mount()
    {
        $this->query = $this->queries[1]; 
    }

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

    public function render()
    {
        return view('analytics::livewire.top-list');
    }
}
