<template>
    <div class="">
        <h3 class="font-bold  mb-1">Top Pages</h3>
        <list :items="items">
            <template v-slot:header1>Page</template>
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
            type: 'pages',
        }
    },

    computed: {
       items() {
            return (this.data || []).map(item => [
                item.path, 
                item.visitors,
            ])
        }
    },
}
</script>
