<!DOCTYPE html>
<html>
<head>
    @foreach (Statamic::availableStyles(request()) as $package => $paths)
        @foreach ($paths as $path)
            <link href="{{ Statamic::vendorPackageAssetUrl($package, $path, 'css') }}" rel="stylesheet" />
        @endforeach
    @endforeach

    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.js"></script>
    <script type="module">
        import { format } from 'https://esm.run/date-fns';
        window.format = format
    </script>
</head>
<body class="m-0 p-0 text-slate-600">

    <div 
        class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4"
        x-data="{
            period: 7,
            filters: {},
            removeFilter(key) {
                delete this.filters[key]
            },
        }"
        x-init=""
    >
    
    <div class="flex justify-between items-center mb-2">
        <div class="flex items-center">
            {{-- Page title --}}
            <h1 class="text-xl text-slate-700">Anayltics Dashboard</h1>
            
            {{-- Active filters --}}
            <x-analytics::filters />
          
        </div>

        {{-- Period selector --}}
        <livewire:period-selector wire:model.change="period" />

    </div>

</body>
</html>

