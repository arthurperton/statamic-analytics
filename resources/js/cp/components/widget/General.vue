<template>
    <div>
      <h3 class="mt-4 font-bold">General</h3>
        <div v-if="data" class="flex justify-between">
            <div>Unique Visitors<br/>{{ data['uniqueVisitors'] }}</div>
            <div>Total visits<br/>{{data['visits'] }}</div>
            <div>Pageviews<br/>{{data['pageviews'] }}</div>
            <div>Views per Visit<br/>{{ data['viewsPerVisit'].toFixed(1) }}</div>
            <div>Visit Duration<br/>{{ visitDuration }}</div>
        </div>
    </div>
</template>

<script>
import widget from './widget'

export default {
    mixins: [widget],

    data() {
        return {
            type: 'general',
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
}
</script>
