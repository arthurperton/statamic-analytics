<div 
    class="shadow-md bg-white rounded-xl px-4 pt-4"
    x-data="{
        chart: undefined,
        data: [],
        loading: true,
        type: 'line',
        smooth: false,
        dateFormatter() {
            switch (period) {
                case 1:
                    return '{HH}:{mm}'
                default:
                    return '{ee} {d} {MMM}'
            }
        },
        option() {
            return {
                //animation: false,
                animationDuration: 0,
                animationDurationUpdate: 50,
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
                    //animation: false,
                    type: 'time',
                    boundaryGap: this.type != 'line',
                    axisLabel: {
                        // formatter: (value) => window.format(value, 'eee d MMM')
                        formatter: this.dateFormatter()
                    },
                },
                yAxis: {
                    //animation: false,
                    //name: 'Visitors',
                    nameTextStyle: {
                        align: 'right',
                    },
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
        async updateData() {
            this.loading = true

            const data = await fetchData({ query: statistic, chart: true })

            this.setChartData(data)

            this.loading = false
        },
    }"
    x-init="
        chart = echarts.init(document.getElementById('trend-chart'))
    
        updateData()
        
        $watch('[statistic, period, filters]', () => updateData())
        
        $watch('[data, type, smooth]', () => chart.setOption(option()))
    "
    x-on:resize.window="chart.resize()"
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

    <div class="relative w-full h-96">
        <div id="trend-chart" class="w-full h-full"></div>

        <div 
            class="absolute inset-0 flex justify-center items-center bg-white transition-opacity duration-200 ease-in-out"
            :class="loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        >
            <x-analytics::spinner size="8" />
        </div>
    </div>

</div>
