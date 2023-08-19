<template>
    <div class="">
        <h3 class="font-bold">Top Pages</h3>
        <div 
            class="flex justify-between"
            v-for="page in pages" 
            :key="page.path"
        >
              <div class="flex-grow">{{ page.path }}</div> 
            <div class="text-right">{{ page.visitors }}</div>
        </div>
    </div>
</template>

<script>
import widget from './widget'

export default {
    mixins: [widget],

    data() {
        return {
            type: 'pages',
        }
    },

    computed: {
        pages() {
            return this.data ?? []
        }
    },
}
</script>
