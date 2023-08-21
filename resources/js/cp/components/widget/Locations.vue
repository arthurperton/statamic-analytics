<template>
    <div class="">
        <h3 class="font-bold mb-1">Locations</h3>
         <list :items="items">
            <template v-slot:header1>Country</template>
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
            type: 'locations',
        }
    },

    computed: {
        items() {
            return (this.data || []).map(item => [
                item.country, 
                item.visitors,
            ])
        }
    },
}
</script>
