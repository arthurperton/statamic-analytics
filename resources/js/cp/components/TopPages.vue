<template>
    <div>
        <h3 class="mt-4 font-bold">Top Pages</h3>
        <h4>{{ period }}</h4>
        <ul v-for="page in pages" :key="page.path">
            <li>{{ page.path }}: {{ page.visitors }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        period: {
            type: String,
        },
    },

    data() {
        return {
            pages: [],
        }
    },

    watch: {
        period: {
            immediate: true,
            handler() {
                console.log(this.period)
                this.loadData()
            },
        },

        // period() {
        //     console.log(this.period)
        // },
    },

    methods: {
        loadData() {
            this.$axios
                .post('/cp/analytics/dashboard/stats', {
                    type: 'pages',
                    period: this.period,
                })
                .then((result) => {
                    console.log(result.data.data)
                    this.pages = result.data.data
                });
        },
    }
}
</script>
