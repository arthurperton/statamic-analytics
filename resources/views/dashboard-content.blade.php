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

            fetchQueue: [],

            fetchActive: {},
            
            removeFilter(key) {
                delete this.filters[key]
            },

            setFilter(filter) {
                this.filters[filter['column']] = filter
            },

            async actuallyFetchData(parameters) {
                const response = await fetch('dashboard/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    },
                    body: JSON.stringify(parameters),
                })
                
                const data = await response.json()

                return data.data
            },

            async fetchData(options) {
                const parameters = {
                    query: options.query,
                    period: this.period,
                    filters: Object.values(this.filters).sort((a, b) => (a.column < b.column) ? - 1 : 1),
                    chart: options.chart || false,
                }
                
                const promise = new Promise((resolve, reject) => this.fetchQueue.push({ parameters, resolve, reject }))

                this.processQueue()

                return promise
            },

            async processQueue() {
                if (this.fetchQueue.length === 0) {
                    return
                }

                if (Object.values(this.fetchActive).length >= 6) {
                    setTimeout(() => this.processQueue(), 10)
                    return
                }

                const task = this.fetchQueue.shift()
                
                const key = this.createKey(task.parameters)
                
                this.fetchActive[key] = task
                
                const data = await this.remember(key, 300, () => this.actuallyFetchData(task.parameters))

                delete this.fetchActive[key]

                task.resolve(data)
                
                this.processQueue()
            },

            createKey(parameters) {
                return JSON.stringify(parameters)
            },

            async remember(key, ttl, callback) {
                const cached = sessionStorage.getItem(key)

                if (cached) {
                    const parsed = JSON.parse(cached)
                    
                    if (parsed.expires > Date.now()) {
                        await new Promise(resolve => setTimeout(resolve, 100));

                        return parsed.data
                    }
                        
                    sessionStorage.removeItem(key)
                }

                const data = await callback()

                sessionStorage.setItem(key, JSON.stringify({
                    expires: Date.now() + ttl * 1000,
                    data,
                }))

                return data
            },
        }"
        x-init="
            $watch('[period, filters]', () => fetchQueue.length = 0)
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
        <div class="grid md:grid-cols-2 gap-4">
            <x-analytics::tabs title="Top Sources" :tabs="['All']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopSources" column-name="source" column-title="Source" bar-color="bg-analytics-blue/5" />
                </x-slot:tab-0>
            </x-analytics::tabs>

            <x-analytics::tabs title="Top Pages" :tabs="['Pages']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopPages" column-name="path" column-title="Page" bar-color="bg-analytics-green/5" />
                </x-slot:tab-0>
            </x-analytics::tabs>
    
            <x-analytics::tabs title="Locations" :tabs="['Countries']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopCountries" column-name="country" column-title="Country" bar-color="bg-analytics-yellow/10" />
                </x-slot:tab-0>
            </x-analytics::tabs>
    
            <x-analytics::tabs title="Devices" :tabs="['Browser', 'OS', 'Size']">
                <x-slot:tab-0>
                    <x-analytics::top-list query="TopBrowsers" column-name="browser" column-title="Browser" bar-color="bg-analytics-blue/5" />
                </x-slot:tab-0>
                <x-slot:tab-1>
                    <x-analytics::top-list query="TopOperatingSystems" column-name="os" column-title="Operating system" bar-color="bg-analytics-blue/5" />
                </x-slot:tab-1>
                <x-slot:tab-2>
                    <x-analytics::top-list query="TopDevices" column-name="device" column-title="Device" bar-color="bg-analytics-blue/5" />
                </x-slot:tab-2>
            </x-analytics::tabs>
        </div>

    </div>

</body>
</html>

