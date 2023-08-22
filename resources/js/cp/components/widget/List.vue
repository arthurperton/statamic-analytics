<template>
    <div>
         <div class="flex justify-between text-slate-500 mb-1">
            <div class="flex-grow"><slot name="header1"></slot></div>
            <div class="text-right">Visitors</div>
        </div>
        <div 
            class="flex justify-between gap-8"
            v-for="item in items" 
            :key="item[0]"
        >
            <div class="flex-grow pl-0 truncate">{{ item[0] }}</div> 
            <div class="text-right">{{ item[1] }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // columns: {
        //     type: Array,
        //     default: [],
        // },
        items: {
            type: Array,
            default: [],
        },
    },
}
</script>
