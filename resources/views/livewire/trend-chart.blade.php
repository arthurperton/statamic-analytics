<div class="shadow-md bg-white rounded-xl px-4 pt-4">
    {{-- <h2 class="text-slate-500 mb-1">Unique Visitors</h2> --}}
    <div id="chart" class="w-full h-96"></div>

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

        function createChart(data) {
            console.log('createChart')
            // const data = await $wire.data()
            // console.log(document.getElementById('chart'))
            const chart = echarts.init(document.getElementById('chart'));
            // console.log('chart', chart)
            window.addEventListener('resize', function() {
                chart.resize();
            });
            // console.log(data)
            option.title = { text: 'Unique Visitors' }
            option.xAxis.data = data.map(d => d.timestamp)
            option.series[0].data = data.map(d => d.value)
            // console.log(option)
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
