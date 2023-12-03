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
            
            filters: [],
            
            statistic: 'UniqueVisitors',
            
            removeFilter(key) {
                delete this.filters[key]
            },

            async fetchData(query) {
                const parameters = {
                    query,
                    period: this.period,
                    filters: Object.values(this.filters),
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
        {{-- <x-analytics::trend-chart /> --}}

    </div>

</body>
</html>

