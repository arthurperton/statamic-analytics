<template>
    <div class="card content">
        <div v-if="data" class="flex justify-start flex-wrap">

            <div class="group cursor-pointer mb-4 pr-8 max-xl:w-1/2 border-r" @click="select('uniqueVisitors')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'uniqueVisitors' }">Unique Visitors</div>
                <div class="text-lg font-bold">{{ data['uniqueVisitors'] }}</div>
            </div>
            <div class="group cursor-pointer mb-4 pr-8 pl-8 max-xl:w-1/2 xl:border-r" @click="select('visits')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'visits' }">Total visits</div>
                <div class="text-lg font-bold">{{ data['visits'] }}</div>
            </div>

            <div class="group cursor-pointer mb-4 pr-8 xl:pl-8 max-xl:w-1/2 border-r" @click="select('pageviews')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'pageviews' }">Pageviews</div>
                <div class="text-lg font-bold">{{ data['pageviews'] }}</div>
            </div>
            <div class="group cursor-pointer mb-4 pr-8 pl-8 max-xl:w-1/2 xl:border-r" @click="select('viewsPerVisit')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'viewsPerVisit' }">Views per Visit</div>
                <div class="text-lg font-bold">{{ data['viewsPerVisit'].toFixed(2) }}</div>
            </div>

            <div class="group cursor-pointer mb-4 pr-8 xl:pl-8 max-xl:w-1/2 border-r" @click="select('bounceRate')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'bounceRate' }">Bounce Rate</div>
                <div class="text-lg font-bold">{{ data['bounceRate'] }}%</div>
            </div>
            <div class="group cursor-pointer mb-4 pl-8 xl:pl-8 max-xl:w-1/2" @click="select('visitDuration')">
                <div class="text-sm uppercase group-hover:text-blue-600" :class="{ 'text-blue-600': selectedType == 'visitDuration' }">Visit Duration</div>
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
            this.loadChartData()
        },

        loadChartData() {
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
        },

        select(type) {
            console.log(`select(${type})`)
            this.selectedType = type
            this.loadChartData()
        },
    },
}
</script>
