<div>
    <script type="text/javascript">
        const option = {
            // animation: false,
            animationDuration: 200,
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

        const data = [
            { timestamp: 'A', value: 1 },
            { timestamp: 'B', value: 2 },
            { timestamp: 'C', value: 3 },
        ]

        

        // document.addEventListener('livewire:initialized', () => {
        //     @this.on('data', ([bdata]) => {
                console.log(document.getElementById('chart'))
                const chart = echarts.init(document.getElementById('chart'));
                console.log('chart', chart)
                window.addEventListener('resize', function() {
                    chart.resize();
                });
                option.xAxis.data = data.map(d => d.timestamp)
                option.series[0].data = data.map(d => d.value)
                console.log(option)
                chart.setOption(option);

                // console.log(data)
        //     });
        // });

        // Livewire.hook('component.init', ({ component, cleanup }) => {
        //     // alert('init')
        //     chart.setOption(option);
        // })

        // Livewire.hook('morph.updated', ({ component, cleanup }) => {
        //     alert('updated')
        //     chart.setOption(option);
        // })
    </script>
</div>
