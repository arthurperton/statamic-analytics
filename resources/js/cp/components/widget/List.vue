<template>
    <div>
         <div class="flex justify-between text-slate-500 mb-1">
            <div class="flex-grow"><slot name="header1">???</slot></div>
            <div class="text-right"><slot name="header2">Visitors</slot></div>
        </div>
        <div 
            class="flex justify-between"
            v-for="item in items" 
            :key="item[0]"
        >
            <div class="flex-grow pl-0"><slot name="cell1">{{ item[0] }}</slot></div> 
            <div class="text-right"><slot name="cell2">{{ item[1] }}</slot></div>
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
