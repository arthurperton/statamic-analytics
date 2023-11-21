<!DOCTYPE html>
<html>
<head>
    @foreach (Statamic::availableStyles(request()) as $package => $paths)
        @foreach ($paths as $path)
            <link href="{{ Statamic::vendorPackageAssetUrl($package, $path, 'css') }}" rel="stylesheet" />
        @endforeach
    @endforeach

    @livewireStyles
    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
</head>
<body class="p-12">

    <div class="shadow-md bg-white rounded-xl p-6">
        <h1>Inline Frame Contents</h1>

        <livewire:counter />

        <div id="chart" class="w-full h-96" style="aspect-ratio: 3/1;"></div>
        
        <livewire:chart />

    </div>

    @livewireScripts
</body>
</html>

