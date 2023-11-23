<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use Carbon\Carbon;
use Livewire\Attributes\Computed;
use Livewire\Attributes\Reactive;
use Livewire\Component;

class TrendChart extends Component
{
    #[Reactive]
    public $period;
    
    public $title = "Chart";
    
    public $query;

    public function render()
    {
        return view('analytics::livewire.trend-chart');
    }

    public function boot()
    {
        $this->sendData();
    }

    public function updated($property)
    { 
        if ($property === 'period') {
            $this->sendData();
        }
    }

    protected function sendData()
    {
        $this->dispatch('data', $this->data());
    }


    #[Computed]
    public function data()
    {
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);

        $fromSeconds = $from->getTimestamp();
        $toSeconds = $to->getTimestamp();

        $interval = $from->diff($to)->days <= 1 ? 3600 : 86400;

        $records = (new ('\\ArthurPerton\\Analytics\\Data\\Query\\'.$this->query))->query($from, $to)
            ->selectRaw("created - ((created - {$fromSeconds}) % {$interval}) AS timestamp")
            ->groupBy('timestamp')
            ->orderBy('timestamp')
            ->get();

        $series = collect();
        for ($timestamp = $fromSeconds; $timestamp < $toSeconds; $timestamp += $interval) {
            $series->put($timestamp, (object) ['timestamp' => $timestamp, 'value' => 0]);
        }

        $records->each(function ($record) use ($series) {
            $series->put($record->timestamp, $record);
        });

        // $series->each(function ($record) {
        //     $record->timestamp = date('Y-M-d)
        // });

        return $series->values();
    }

}