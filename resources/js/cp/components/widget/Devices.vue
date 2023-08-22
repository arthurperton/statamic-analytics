<template>
    <div class="card content w-full h-full">
        <div class="flex justify-between">
            <h3 class="font-bold mb-2">Devices</h3>
            <div class="flex gap-3">
                <button :class="{ 'text-blue-600': type === 'browsers' }" @click="setType('browsers')">Browser</button>
                <button :class="{ 'text-blue-600': type === 'operatingSystems' }" @click="setType('operatingSystems')">OS</button>
                <button :class="{ 'text-blue-600': type === 'devices' }" @click="setType('devices')">Size</button>
            </div>
        </div>

         <list :items="items">
            <template v-slot:header1>{{ title }}</template>
        </list>
    </div>
</template>

<script>
import widget from './/widget'
import List from './List.vue'

export default {
    components: {
        List,
    },

    mixins: [widget],

    data() {
        return {
            type: 'browsers',
        }
    },

    computed: {
        items() {
            return (this.data || []).map(item => [
                item[this.key], 
                item.visitors,
            ])
        },

        key() {
            return {
                browsers: 'browser',
                operatingSystems: 'os',
                devices: 'device',
            }[this.type]
        },

        title() {
            return {
                browsers: 'Browser',
                operatingSystems: 'OS',
                devices: 'Size',
            }[this.type]
        }
    },

    methods: {
        setType(type) {
            this.type = type
            this.loadData()
        }
    }
}
</script>
