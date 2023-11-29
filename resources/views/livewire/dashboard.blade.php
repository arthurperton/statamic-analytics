<div class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
    
    <div class="flex flex-col">
        <h1 class="text-xl mb-6 text-slate-700">Anayltics Dashboard</h1>
        <livewire:period-selector wire:model.change="period" />
    </div>
    
    <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <livewire:aggregate title="Unique Visitors" query="UniqueVisitors" :$period :$statistic />
        <livewire:aggregate title="Total Visits" query="Visits" :$period :$statistic />
        <livewire:aggregate title="Pageviews" query="Pageviews" :$period :$statistic />
        <livewire:aggregate title="Views per Visit" query="ViewsPerVisit" :$period :$statistic decimals="2" />
        <livewire:aggregate title="Bounce Rate" query="BounceRate" :$period :$statistic unit="%" />
        <livewire:aggregate title="Visit Duration" query="VisitDuration" :$period :$statistic unit="s" />
    </div>
    
    <livewire:trend-chart query="UniqueVisitors" :period="$period" />

    <div class="grid grid-cols-2 gap-4">
        {{-- <livewire:top-list title="Top Sources" query="TopSources" :period="$period" />
        <livewire:top-list title="Top Pages" query="TopPages" :period="$period" />
        <livewire:top-list title="Countries" query="TopCountries" :period="$period" /> --}}
        <livewire:top-list title="Devices" :queries="['TopBrowsers', 'TopDevices', 'TopOperatingSystems']" :period="$period" />
    </div>

</div>