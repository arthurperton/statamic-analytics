<template>
    <div class="">
        <div class="flex justify-between">
            <h3 class="font-bold">Devices</h3>
            <div class="flex gap-2" style="gap: 0.5rem;">
                <button @click="setType('browsers')">Browser</button>
                <button @click="setType('operatingSystems')">OS</button>
                <button @click="setType('devices')">Size</button>
            </div>
        </div>
        <div 
            class="flex justify-between"
            v-for="item in items" 
            :key="item[key]"
        >
              <div class="flex-grow">{{ item[key] }}</div> 
            <div class="text-right">{{ item.visitors }}</div>
        </div>
    </div>
</template>

<script>
import widget from './widget'

export default {
    mixins: [widget],

    data() {
        return {
            type: 'browsers',
        }
    },

    computed: {
        items() {
            return this.data ?? []
        },

        key() {
            return {
                browsers: 'browser',
                operatingSystems: 'os',
                devices: 'device',
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
