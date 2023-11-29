<div 
    class="shadow-md bg-white rounded-xl px-4 pt-4"
    x-data="{
        chart: undefined,
        option: {
            animation: false,
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
                    color: '#2D9CF9',
                    areaStyle: {
                        color: '#2D9CF9',
                        opacity: 0.2,
                    },
                },
            ],
        },
        setChartData(data) {
            this.option.xAxis.data = data.map(d => d.timestamp)
            this.option.series[0].data = data.map(d => d.value)

            this.chart.setOption(this.option)
        },
        toggleSmooth() {
            this.option.series[0].smooth = ! this.option.series[0].smooth

            this.chart.setOption(this.option)
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
        @include('analytics::component.button-group', [
            'options' => ['line', 'bar', 'both'],
        ])

        <button 
            @click.prevent="toggleSmooth()"
            class="ml-4 px-2 py-0.5 border border-slate-300 rounded-lg text-sm"
            :class="option.series[0].smooth ? 'shadow-inner bg-slate-50 font-medium' : 'font-light'"
        >smooth</button>
    </div>

    <div wire:ignore id="chart" class="w-full h-96 transition-all duration-150" wire:loading.class="opacity-0 -translate-y-1"></div>

</div>
