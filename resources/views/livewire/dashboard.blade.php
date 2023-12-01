<div 
    class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4"
>
    
    <div class="flex justify-between items-center mb-2">
        <div class="flex items-center">
            {{-- Page title --}}
            <h1 class="text-xl text-slate-700">Anayltics Dashboard</h1>
            
            {{-- Active filters --}}
            <div class="ml-4 flex gap-2">
                @foreach ($filters as $filter)
                    <div class="flex items-center bg-white rounded-md shadow-md">
                        <div class="pl-3 py-1">{{ $filter['title'] }} is <span class="font-bold">{{ $filter['displayValue'] }}</span></div>
                        <button class="pl-3 pr-3 hover:text-analytics-blue" wire:click="removeFilter('{{ $filter['column'] }}')">x</button>
                    </div>
                @endforeach
            </div>

        </div>

        {{-- Period selector --}}
        <livewire:period-selector wire:model.change="period" />
    </div>
    
    {{-- Aggregates --}}
    <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <livewire:aggregate title="Unique Visitors" query="UniqueVisitors" :$period :$filters selected />
        <livewire:aggregate title="Total Visits" query="Visits" :$period :$filters />
        <livewire:aggregate title="Pageviews" query="Pageviews" :$period :$filters />
        <livewire:aggregate title="Views per Visit" query="ViewsPerVisit" :$period :$filters decimals="2" />
        <livewire:aggregate title="Bounce Rate" query="BounceRate" :$period :$filters unit="%" />
        <livewire:aggregate title="Visit Duration" query="VisitDuration" :$period :$filters unit="s" />
    </div>
    
    {{-- Trend chart --}}
    <livewire:trend-chart :query="$statistic" :$period :$filters />

    <div class="grid grid-cols-2 gap-4">
        <x-analytics::tabs title="Top Sources" :tabs="['All']">
            <x-slot:tab-0>
                <livewire:top-list query="TopSources" :$period :$filters />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Top Pages" :tabs="['Pages']">
            <x-slot:tab-0>
                <livewire:top-list query="TopPages" :$period :$filters />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Locations" :tabs="['Countries']">
            <x-slot:tab-0>
                <livewire:top-list query="TopCountries" :$period :$filters />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Devices" :tabs="['Browser', 'OS', 'Size']">
            <x-slot:tab-0>
                <livewire:top-list query="TopBrowsers" :$period :$filters />
            </x-slot:tab-0>
            <x-slot:tab-1>
                <livewire:top-list query="TopOperatingSystems" :$period :$filters />
            </x-slot:tab-1>
            <x-slot:tab-2>
                <livewire:top-list query="TopDevices" :$period :$filters />
            </x-slot:tab-2>
        </x-analytics::tabs>
    </div>

</div>