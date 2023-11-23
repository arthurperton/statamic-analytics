<div class="mx-auto max-w-7xl">
    <div class="flex flex-col mb-6">
        <h1 class="text-xl mb-6 text-slate-700">Anayltics Dashboard</h1>
        <livewire:period-selector wire:model.change="period" />
    </div>

    <div class="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6">
        <livewire:aggregate title="Unique Visitors" query="UniqueVisitors" :period="$period" />
        <livewire:aggregate title="Total Visits" query="Visits" :period="$period" />
        <livewire:aggregate title="Pageviews" query="Pageviews" :period="$period" />
        <livewire:aggregate title="Views per Visit" query="ViewsPerVisit" :period="$period" decimals="2" />
        <livewire:aggregate title="Bounce Rate" query="BounceRate" :period="$period" unit="%" />
        <livewire:aggregate title="Visit Duration" query="VisitDuration" :period="$period" unit="s" />
    </div>
</div>