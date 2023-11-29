<div 
    class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4"
>
    
    <div class="flex justify-between items-center mb-2">
        <div class="flex items-center">
            <h1 class="text-xl text-slate-700">Anayltics Dashboard</h1>
            <div class="ml-4 flex">
                @foreach ($filters as $key => $value)
                    <div class="px-2 py-1 bg-white rounded-md shadow-md">
                        {{ $key }} is <span class="font-bold">{{ $value }}</span>
                    </div>
                @endforeach
            </div>
        </div>
        <livewire:period-selector wire:model.change="period" />
    </div>
    
    <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <livewire:aggregate title="Unique Visitors" query="UniqueVisitors" :$period selected />
        <livewire:aggregate title="Total Visits" query="Visits" :$period />
        <livewire:aggregate title="Pageviews" query="Pageviews" :$filters :$period />
        <livewire:aggregate title="Views per Visit" query="ViewsPerVisit" :$period decimals="2" />
        <livewire:aggregate title="Bounce Rate" query="BounceRate" :$period unit="%" />
        <livewire:aggregate title="Visit Duration" query="VisitDuration" :$period unit="s" />
    </div>
    
    <livewire:trend-chart :query="$statistic" :period="$period" />

    <div class="grid grid-cols-2 gap-4">
        <x-analytics::tabs title="Top Sources" :tabs="['All']">
            <x-slot:tab-0>
                <livewire:top-list query="TopSources" :period="$period" />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Top Pages" :tabs="['Pages']">
            <x-slot:tab-0>
                <livewire:top-list query="TopPages" :period="$period" />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Locations" :tabs="['Countries']">
            <x-slot:tab-0>
                <livewire:top-list query="TopCountries" :period="$period" />
            </x-slot:tab-0>
        </x-analytics::tabs>

        <x-analytics::tabs title="Devices" :tabs="['Browser', 'OS', 'Size']">
            <x-slot:tab-0>
                <livewire:top-list query="TopBrowsers" :period="$period" />
            </x-slot:tab-0>
            <x-slot:tab-1>
                <livewire:top-list query="TopOperatingSystems" :period="$period" />
            </x-slot:tab-1>
            <x-slot:tab-2>
                <livewire:top-list query="TopDevices" :period="$period" />
            </x-slot:tab-2>
        </x-analytics::tabs>
        {{-- <livewire:top-list title="Top Sources" query="TopSources" :period="$period" />
        <livewire:top-list title="Top Pages" query="TopPages" :period="$period" />
        <livewire:top-list title="Countries" query="TopCountries" :period="$period" /> --}}
        {{-- <livewire:top-list title="Devices" :queries="['TopBrowsers', 'TopDevices', 'TopOperatingSystems']" :period="$period" /> --}}
    </div>

</div>