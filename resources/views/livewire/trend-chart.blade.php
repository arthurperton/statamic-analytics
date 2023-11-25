<div class="shadow-md bg-white rounded-xl px-4 pt-4">

    <div wire:ignore id="chart" class="w-full h-96 transition-all duration-150" wire:loading.class="opacity-0 -translate-y-1"></div>

    @script
    <script type="text/javascript">
        const option = {
            animation: false,
            // animationDuration: 200,
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

        // const data = [
        //     { timestamp: 'A', value: 1 },
        //     { timestamp: 'B', value: 2 },
        //     { timestamp: 'C', value: 3 },
        // ]

        const chart = echarts.init(document.getElementById('chart'));
        window.addEventListener('resize', function() {
            chart.resize();
        });

        function createChart(data) {
            
            option.title = { text: 'Unique Visitors' }
            option.xAxis.data = data.map(d => d.timestamp)
            option.series[0].data = data.map(d => d.value)

            chart.setOption(option);
        }

        document.addEventListener('livewire:initialized', async () => {
            console.log('initialized')
            createChart(await $wire.data())
            $wire.$on('data', ([data]) => {
                // console.log('rendered')
                console.log('data')

                setTimeout(() => {
                 
                    createChart(data)
                    // console.log(data)

                }, 0);
            });
        });

    </script>
    @endscript
</div>
