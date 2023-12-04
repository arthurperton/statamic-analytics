<!DOCTYPE html>
<html>
<head>
    @foreach (Statamic::availableStyles(request()) as $package => $paths)
        @foreach ($paths as $path)
            <link href="{{ Statamic::vendorPackageAssetUrl($package, $path, 'css') }}" rel="stylesheet" />
        @endforeach
    @endforeach
    
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.js"></script>
    <script type="module">
        import { format } from 'https://esm.run/date-fns';
        window.format = format
    </script>
</head>
<body class="m-0 p-0 text-slate-600">

    <div 
        v-pre
        class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4"
        x-data="{
            period: 7,
            
            filters: {},
            
            statistic: 'UniqueVisitors',
            
            removeFilter(key) {
                delete this.filters[key]
            },

            setFilter(filter) {
                this.filters[filter['column']] = filter
                console.log(this.filters)
            },

            async fetchData(options) {
                const parameters = {
                    period: this.period,
                    filters: Object.values(this.filters),
                    ...options,
                }

                const response = await fetch('dashboard/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    },
                    body: JSON.stringify(parameters),
                })
                
                const data = await response.json()

                console.log(data)

                return data.data
            },
        }"
        x-init="

        "
        >

        {{-- Title row --}}
        <div class="flex justify-between items-center mb-2">

            <div class="flex items-center">
                {{-- Page title --}}
                <h1 class="text-xl text-slate-700">Anayltics Dashboard</h1>
                
                {{-- Active filters --}}
                <x-analytics::filters />
            
            </div>

            {{-- Period selector --}}
            <x-analytics::period-selector />

        </div>

        {{-- Aggregates --}}
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <x-analytics::aggregate title="Unique Visitors" query="UniqueVisitors" />
            <x-analytics::aggregate title="Total Visits" query="Visits" />
            <x-analytics::aggregate title="Pageviews" query="Pageviews"  />
            <x-analytics::aggregate title="Views per Visit" query="ViewsPerVisit" decimals="2" />
            <x-analytics::aggregate title="Bounce Rate" query="BounceRate" unit="%" />
            <x-analytics::aggregate title="Visit Duration" query="VisitDuration" unit="s" />
        </div>

         {{-- Trend chart --}}
        <x-analytics::trend-chart />

        {{-- Breakdown --}}
        <div class="grid grid-cols-2 gap-4">
            <x-analytics::tabs title="Top Sources" :tabs="['All']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopSources" column-name="source" column-title="Source"  />
                </x-slot:tab-0>
            </x-analytics::tabs>

            <x-analytics::tabs title="Top Pages" :tabs="['Pages']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopPages" column-name="path" column-title="Page" />
                </x-slot:tab-0>
            </x-analytics::tabs>
    
            <x-analytics::tabs title="Locations" :tabs="['Countries']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopCountries" column-name="country" column-title="Country" />
                </x-slot:tab-0>
            </x-analytics::tabs>
    
            <x-analytics::tabs title="Devices" :tabs="['Browser', 'OS', 'Size']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopBrowsers" column-name="browser" column-title="Browser" />
                </x-slot:tab-0>
                <x-slot:tab-1>
                    <x-analytics::top-list query="TopOperatingSystems" column-name="os" column-title="Operating system" />
                </x-slot:tab-1>
                <x-slot:tab-2>
                    <x-analytics::top-list query="TopDevices" column-name="device" column-title="Device" />
                </x-slot:tab-2>
            </x-analytics::tabs>
        </div>

    </div>

</body>
</html>

