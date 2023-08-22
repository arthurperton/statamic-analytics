<template>
    <div class="widget w-1/2 mb-4 px-2">
        <div class="card content w-full h-full">
            <div class="flex justify-between">
                <h3 class="font-bold mb-1">{{ title }}</h3>
                <!-- <div class="flex gap-2">
                    <button :class="{ 'text-blue-600': type === 'browsers' }" @click="setType('browsers')">Browser</button>
                    <button :class="{ 'text-blue-600': type === 'operatingSystems' }" @click="setType('operatingSystems')">OS</button>
                    <button :class="{ 'text-blue-600': type === 'devices' }" @click="setType('devices')">Size</button>
                </div> -->
            </div>

            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
    },
}
</script>