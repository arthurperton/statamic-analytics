<template>
    <div class="">
        <h3 class="font-bold mb-1">Top Sources</h3>
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

    data() {
        return {
            type: 'sources',
        }
    },

    computed: {
        items() {
            return (this.data || []).map(item => [
                item.source  || 'Direct / None', 
                item.visitors,
            ])
        }
    },
}
</script>
