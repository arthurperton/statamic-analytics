<template>
    <div class="">
        <h3 class="font-bold">Locations</h3>
        <div 
            class="flex justify-between"
            v-for="location in locations" 
            :key="location.country"
        >
            <div class="flex-grow">{{ location.country }}</div> 
            <div class="text-right">{{ location.visitors }}</div>
        </div>
    </div>
</template>

<script>
import widget from './widget'

export default {
    mixins: [widget],

    data() {
        return {
            type: 'locations',
        }
    },

    computed: {
        locations() {
            return this.data ?? []
        }
    },
}
</script>
