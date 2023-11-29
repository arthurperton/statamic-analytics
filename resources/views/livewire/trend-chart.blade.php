<div 
    class="shadow-md bg-white rounded-xl px-4 pt-4"
    x-data="{
        chart: undefined,
        option: {
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
                    line: true,
                    bar: false,
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
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
                    smooth: false,
                    color: '#2D9CF9',
                    areaStyle: {
                        color: '#2D9CF9',
                        opacity: 0.2,
                    },
                },
                {
                    type: 'bar',
                    name: 'bar',
                    color: '#2D9CF9',
                    areaStyle: {
                        color: '#2D9CF9',
                        opacity: 0.2,
                    },
                },
            ],
        },
        setChartData(data) {
            //this.option.xAxis.data = data.map(d => d.timestamp)
            //console.log(this.option.xAxis.data)
            //this.option.series[0].data = data.map(d => d.value)
            //this.option.series[1].data = data.map(d => d.value)
            this.option.series[0].data = data.map(d => [new Date(d.timestamp * 1000), d.value])
            this.option.series[1].data = data.map(d => [new Date(d.timestamp * 1000), d.value])

            this.chart.setOption(this.option)
        },
        toggleSmooth() {
            this.option.series[0].smooth = ! this.option.series[0].smooth

            this.chart.setOption(this.option)
        },
        setSmooth(smooth) {
            this.chart.setOption({ series: [{ name: 'line', smooth }] })
        },
        setChartType(type) {
            this.chart.setOption({ 
                legend: { 
                    selected: { 
                        line: type !== 'bars',
                        bar: type !== 'line',
                    } 
                },
                xAxis: {
                    boundaryGap: type !== 'line'
                }
            })
        },
    }"
    x-init="
        chart = echarts.init(document.getElementById('chart'))

        window.addEventListener('resize', function() {
            chart.resize()
        });

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
            x-init="$watch('selected', (value) => setChartType(value))"
        >
            @include('analytics::component.button-group')
        </div>

        <div class="ml-4"
            x-data="{
                selected: undefined,
                options: ['smooth'],
            }"
            x-init="$watch('selected', (value) => setSmooth(value === 'smooth'))"
        >
            @include('analytics::component.button-group')
        </div>
    </div>

    <div wire:ignore id="chart" class="w-full h-96 transition-all duration-150" wire:loading.class="opacity-0 -translate-y-1"></div>

</div>
