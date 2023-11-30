<div 
    class="shadow-md bg-white rounded-xl px-4 pt-4"
    x-data="{
        chart: undefined,
        data: [],
        type: 'line',
        smooth: false,
        option() {
            return {
                animation: false,
                //textStyle: {
                //   fontFamily: 'Inter',
                //},
                grid: {
                    top: 64,
                    bottom: 64,
                    left: 64,
                    right: 64,
                },
                legend: {
                    show: false,
                    selected: {
                        line: this.type !== 'bars',
                        bar: this.type !== 'line',
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'time',
                    boundaryGap: this.type != 'line',
                    axisLabel: {
                        //formatter: '{yyyy}-{MM}-{dd}',
                        formatter: (value) => window.format(value, 'eee d MMM')
                    },
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        type: 'line',
                        name: 'line',
                        smooth: this.smooth,
                        color: '#2D9CF9',
                        areaStyle: {
                            color: '#2D9CF9',
                            opacity: 0.2,
                        },
                        data: this.data,
                    },
                    {
                        type: 'bar',
                        name: 'bar',
                        color: '#2D9CF9',
                        areaStyle: {
                            color: '#2D9CF9',
                            opacity: 0.2,
                        },
                        data: this.data,
                    },
                ],
            }
        },
        setChartData(data) {
            this.data = data.map(d => [new Date(d.timestamp * 1000), d.value])
        },
    }"
    x-init="
        chart = echarts.init(document.getElementById('trend-chart'))

        window.addEventListener('resize', function() {
            chart.resize()
        });

        $watch('data, type, smooth', () => chart.setOption(option()))

        document.addEventListener('livewire:initialized', async () => {
            setChartData(await $wire.data())

            $wire.$on('data', ([data]) => setTimeout(() => setChartData(data), 0))
        })
    "
>
    
    <div class="flex">
        <div class=""
            x-data="{
                selected: 'line',
                options: ['line', 'bars', 'both'],
            }"
            x-init="$watch('selected', (value) => type = value)"
        >
            <x-analytics::button-group />
        </div>

        <div class="ml-4"
            x-data="{
                selected: undefined,
                options: ['smooth'],
            }"
            x-init="$watch('selected', (value) => smooth = value)"
        >
            <x-analytics::button-group />
        </div>
    </div>

    <div wire:ignore id="trend-chart" class="w-full h-96"></div>

</div>