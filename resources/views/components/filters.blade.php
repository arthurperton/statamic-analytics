<div
    class=""
    x-data="{
        compact: false,
        updateCompact() {
            this.compact = $refs.filters.clientWidth < $refs.filters.scrollWidth
        },
    }"
    x-init="
        $watch('filters', () => updateCompact())
    "
    x-on:resize.window.throttle.100ms="updateCompact()"
>
    <div 
        class="relative ml-4 flex gap-2 overflow-hidden"
        :class="compact ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
        x-ref="filters"
    >
        <template x-for="filter in filters">
            <div class="flex-shrink-0  bg-white rounded-md shadow-md">
                <div class="inline-block pl-3 py-1">
                    <span x-text="`${filter['title']} is `"></span>
                    <span x-text="filter['displayValue']" class="font-bold"></span>
                </div>
                <button class="pl-3 pr-3 hover:text-analytics-blue" x-on:click="removeFilter(filter['column'])">x</button>
            </div>
        </template>
    </div>
</div>
