<template>
    <div class="">
        <h3 class="font-bold">Top Sources</h3>
        <div
            class="flex justify-between" 
            v-for="source in sources" 
            :key="source.source"
        >
            <div class="flex-grow">{{ source.source || 'Direct / None' }}</div> 
            <div class="text-right">{{ source.visitors }}</div>
        </div>
    </div>
</template>

<script>
import widget from './widget'

export default {
    mixins: [widget],

    data() {
        return {
            type: 'sources',
        }
    },

    computed: {
        sources() {
            return this.data ?? []
        }
    },
}
</script>
