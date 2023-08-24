<template>
    <div class="card content">
        <div v-if="data" class="flex justify-start divide-x flex-wrap">
            <div class="pr-8">
                <div class="text-sm uppercase">Unique Visitors</div>
                <div class="text-lg font-bold">{{ data['uniqueVisitors'] }}</div>
            </div>
            <div class="px-8">
                <div class="text-sm uppercase">Total visits</div>
                <div class="text-lg font-bold">{{data['visits'] }}</div>
            </div>
            <div class="px-8">
                <div class="text-sm uppercase">Pageviews</div>
                <div class="text-lg font-bold">{{data['pageviews'] }}</div>
            </div>
            <div class="px-8">
                <div class="text-sm uppercase">Views per Visit</div>
                <div class="text-lg font-bold">{{ data['viewsPerVisit'].toFixed(1) }}</div>
            </div>
            <div class="pl-8">
                <div class="text-sm uppercase">Visit Duration</div>
                <div class="text-lg font-bold">{{ visitDuration }}</div>
            </div>
        </div>
        <line-chart :data="chartData"></line-chart>
    </div>
</template>

<script>
import widget from './widget'
import LineChart from './chart/LineChart.vue'

export default {
    components: {
        LineChart,
    },
    
    mixins: [widget],

    data() {
        return {
            type: 'general',
            selectedType: 'uniqueVisitors',
            chartData: [],
        }
    },

    computed: {
        visitDuration() {
            const duration = Math.floor(this.data['visitDuration'])
            const seconds = duration % 60
            const minutes = (duration - seconds) / 60

            return minutes ? `${minutes}m ${seconds}s` : `${seconds}s`
        }
    },

    methods: {
        loadMoreData() {
            this.$axios
                .post('/cp/analytics/dashboard/stats', {
                    type: `${this.selectedType}Chart`,
                    period: this.period,
                })
                .then((result) => {
                    console.log(result.data.data)
                    this.chartData = result.data.data.map((d) => {
                        const localDate = new Date(d.timestamp * 1e3);
                        const date = new Date((parseInt(d.timestamp) + localDate.getTimezoneOffset() * 60) * 1e3)
                        return [date, d.visitors]
                    })
                    console.log(this.chartData)
                });
        }
    },
}
</script>
