<template>
    <div class="card p-4 mb-5">
         <select v-model="period">
            <option value="last 1 day">Today</option>
            <option value="last 7 days">Last 7 days</option>
            <option value="last 30 days">Last 30 days</option>
            <option value="all time">All time</option>
        </select>

        <!-- <h3 class="mt-4 font-bold">General</h3>
        Unique Visitors: {{ $visitors }}<br/>
        Total visits: {{ $visits }}<br/>
        Pageviews: {{ $pageviews }}<br/>
        Views per Visit: {{ number_format($views, 2) }}<br/>
        Visit Duration: {{ round($duration) }}s<br/> -->

        <!-- <h3 class="mt-4 font-bold">Chart (for Unique Visitors)</h3>
        <ul>
            @foreach ($chart as $point)
                <li>{{ $point->day }}: {{ $point->visitors }}</li>
            @endforeach
        </ul> -->
        
        <div class="mt-8 grid gap-8 grid-cols-2" style="gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));">
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
import Sources from './widget/Sources.vue'
import Pages from './widget/Pages.vue'
import Locations from './widget/Locations.vue'
import Devices from './widget/Devices.vue'

export default {
    components: {
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