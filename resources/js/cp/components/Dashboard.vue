<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-lg font-bold ml-4">Analytics</h1>
            <div class="card p-2">
                <select v-model="period">
                    <option value="last 1 day">Today</option>
                    <option value="last 7 days">Last 7 days</option>
                    <option value="last 30 days">Last 30 days</option>
                    <option value="all time">All time</option>
                </select>
            </div>
        </div>
        
        <div class="widgets flex flex-wrap -mx-2 py-1">

            <div class="widget w-full mb-4 px-2">
                <general :period="period"></general>
            </div>
            <!-- <h3 class="mt-4 font-bold">Chart (for Unique Visitors)</h3>
            <ul>
                @foreach ($chart as $point)
                    <li>{{ $point->day }}: {{ $point->visitors }}</li>
                @endforeach
            </ul> -->
            
            <!-- <div class="mt-8 grid gap-12 grid-cols-2"> -->
            <div class="widget w-full md:w-1/2 mb-4 px-2">
                <sources :period="period"></sources>
            </div>
            <div class="widget w-full md:w-1/2 mb-4 px-2">
                <pages :period="period"></pages>
            </div>
            <div class="widget w-full md:w-1/2 mb-4 px-2">
                <locations :period="period"></locations>
            </div>
            <div class="widget w-full md:w-1/2 mb-4 px-2">
                <devices :period="period"></devices>
            </div>
            <!-- </div> -->

        </div>

    </div>
</template>

<script>
import General from './widget/General.vue'
import Sources from './widget/Sources.vue'
import Pages from './widget/Pages.vue'
import Locations from './widget/Locations.vue'
import Devices from './widget/Devices.vue'

export default {
    components: {
        General,
        Sources,
        Pages,
        Locations,
        Devices,
    },

    data() {
        return {
            period: 'last 7 days',
        }
    },

    // watch: {
    //     period() {
            
    //     },
    // },

    created() {

    },
}
</script>