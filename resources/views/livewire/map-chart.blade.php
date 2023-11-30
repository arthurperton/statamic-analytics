<div
    x-data="{
        chart: undefined,
    }"

    x-init="
        chart = echarts.init(document.getElementById('map-chart'));
        chart.setOption({
            series: [{
                type: 'map',
                map: 'world',
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111',
                    },
                },
            }]
        });
    "
>
    MAP CHART
    <div wire:ignore id="map-chart" class="w-full h-96"></div>
</div>