<template>
    <div class="card content w-full h-full">
        <h3 class="font-bold mb-1">{{ title }}</h3>
        <list :items="items">
            <template v-slot:header1>Source</template>
        </list>
    </div>
</template>

<script>
import widget from './widget'
import List from './List.vue'

export default {
    components: {
        List,
    },
    
    mixins: [widget],

    props: {
        title: {
            type: String,
        },
        type: {
            type: String,
        },
        dataKey: {
            type: String,
        },
        dataFallback: {
            type: String,
        },
    },

    computed: {
        items() {
            return (this.data || []).map(item => [
                item[this.dataKey] || this.dataFallback, 
                item.visitors,
            ])
        }
    },
}
</script>
