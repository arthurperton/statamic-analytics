<div class="shadow-md bg-white rounded-xl px-4 pt-4">

    @script
    <script type="text/javascript">
        const option = {
            animation: false,
            // animationDuration: 200,
            grid: {
                top: 64,
                bottom: 64,
                left: 64,
                right: 64,
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    type: 'line',
                    smooth: false,
                    // color: '#0AD7B0', 
                    color: '#2D9CF9',
                    areaStyle: {
                        // color: '#0AD7B0',
                        color: '#2D9CF9',
                        opacity: 0.2,
                    },
                },
            ],
        };

        const chart = echarts.init(document.getElementById('chart'));
        window.addEventListener('resize', function() {
            chart.resize();
        });

        function setChartData(data) {
            
            // option.title = { text: 'Unique Visitors' }
            option.xAxis.data = data.map(d => d.timestamp)
            option.series[0].data = data.map(d => d.value)

            chart.setOption(option);
        }

        function toggleSmooth() {
            option.series[0].smooth = ! option.series[0].smooth
            chart.setOption(option)
        }

        document.addEventListener('livewire:initialized', async () => {
            setChartData(await $wire.data())

            $wire.$on('data', ([data]) => {
                // console.log('rendered')
                console.log('data')

                setTimeout(() => {
                 
                    setChartData(data)
                    // console.log(data)

                }, 0);
            });
        });

    </script>
    @endscript
    
    <div class="flex">
        @include('analytics::component.button-group', [
            'options' => ['line', 'bar', 'both'],
        ])

        <button 
            @click.prevent="toggleSmooth()"
            class="ml-4 px-2 py-0.5 border border-slate-300 rounded-lg text-sm font-light"
        >smooth</button>
    </div>

    <div wire:ignore id="chart" class="w-full h-96 transition-all duration-150" wire:loading.class="opacity-0 -translate-y-1"></div>

</div>
