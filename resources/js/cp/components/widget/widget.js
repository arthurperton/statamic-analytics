export default {
    props: {
        period: {
            type: String,
        },
    },

    data() {
        return {
            data: undefined,
        }
    },

    watch: {
        period: {
            immediate: true,
            handler() {
                // console.log(this.period)
                this.loadData()
            },
        },
    },

    methods: {
        loadData() {
            this.$axios
                .post('/cp/analytics/dashboard/stats', {
                    type: this.type,
                    period: this.period,
                })
                .then((result) => {
                    // console.log(result.data.data)
                    this.data = result.data.data
                });
        },
    }
}