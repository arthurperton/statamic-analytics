<template>
    <div class="card p-4 mb-5">
         <select v-model="period">
            <option value="last 1 day">Today</option>
            <option value="last 7 days">Last 7 days</option>
            <option value="last 30 days">Last 30 days</option>
            <option value="all time">All time</option>
        </select>

        <general :period="period"></general>

        <!-- <h3 class="mt-4 font-bold">Chart (for Unique Visitors)</h3>
        <ul>
            @foreach ($chart as $point)
                <li>{{ $point->day }}: {{ $point->visitors }}</li>
            @endforeach
        </ul> -->
        
        <div class="mt-8 grid gap-12 grid-cols-2">
            <sources :period="period"></sources>
            <pages :period="period"></pages>
            <locations :period="period"></locations>
            <devices :period="period"></devices>
        </div>



       <!--

        <h3 class="mt-4 font-bold">Browser</h3>
        <ul>
        @foreach ($browsers as $browser)
            <li>{{ $browser->browser }}: {{ $browser->visitors }}</li>
        @endforeach
        </ul>

        <h3 class="mt-4 font-bold">OS</h3>
        <ul>
        @foreach ($operatingSystems as $operatingSystem)
            <li>{{ $operatingSystem->os }}: {{ $operatingSystem->visitors }}</li>
        @endforeach
        </ul>

        <h3 class="mt-4 font-bold">Size</h3>
        <ul>
        @foreach ($devices as $device)
            <li>{{ $device->device }}: {{ $device->visitors }}</li>
        @endforeach
        </ul>        -->
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