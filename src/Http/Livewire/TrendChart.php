<?php

namespace ArthurPerton\Analytics\Http\Livewire;

use ArthurPerton\Analytics\Data\Query\Query;
use Carbon\Carbon;
use Livewire\Attributes\Reactive;
use Livewire\Component;

class TrendChart extends Component
{
    #[Reactive]
    public $period;

    #[Reactive]
    public $filters = [];

    public $title = 'Chart';

    #[Reactive]
    public $query;

    public function render()
    {
        return view('analytics::livewire.trend-chart');
    }

    public function updated()
    {
        $this->dispatch('updated');
    }

    public function rendered()
    {
        $this->sendData();
    }

    protected function sendData()
    {
        $this->dispatch('data', $this->data());
    }

    public function data()
    {
        $to = Carbon::today();
        $from = $to->clone()->subDays($this->period);

        $fromSeconds = $from->getTimestamp();
        $toSeconds = $to->getTimestamp();

        $interval = $from->diff($to)->days <= 1 ? 3600 : 86400;

        $records = (new (Query::className($this->query))($from, $to, $this->filters))->finalQuery()
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

        return $series->values();
    }
}