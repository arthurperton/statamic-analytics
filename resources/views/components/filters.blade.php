<div
    class="mx-4 flex-1 flex justify-between"
    x-data="{
        compact: false,
        numberOfFilters() {
            return Object.values(filters).length
        },
        updateCompact() {
            this.compact = $el.clientWidth < $refs.filters.scrollWidth
        },
    }"
    x-init="
        $watch('filters', () => updateCompact())
    "
    x-on:resize.window.throttle.100ms="updateCompact()"
>
    <div 
        class="shrink relative flex items-center gap-2 overflow-hidden"
        :class="compact ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
        x-ref="filters"
    >
        <template x-for="filter in filters">
            <div class="flex-shrink-0 bg-white rounded-md shadow-md">
                <div class="inline-block pl-3 py-1">
                    <span x-text="`${filter['title']} is `"></span>
                    <span x-text="filter['displayValue']" class="font-bold"></span>
                </div>
                <button class="pl-3 pr-3 hover:text-analytics-blue" x-on:click="removeFilter(filter['column'])">x</button>
            </div>
        </template>
    </div>
    <template x-if="compact">
        <button
            class="flex-0 relative min-w-max flex rounded-md px-3 py-1 hover:bg-slate-200 transition-colors duration-200"
            x-data="{
                open: false,
            }"
            x-on:click.prevent="open = !open"
        >
            <span x-text="`${numberOfFilters()} Filter${numberOfFilters() === 1 ? '' : 's'}`"></span>
            <div 
                x-show="open"
                class="absolute z-10 top-full right-0 mt-2 bg-white rounded-md shadow-md"
            >
                <template x-for="filter in filters">
                    <div class="px-4 py-2 flex justify-between items-center">
                        <div class="min-w-max mr-8">
                            <span x-text="`${filter['title']} is `"></span>
                            <span x-text="filter['displayValue']" class="font-bold"></span>
                        </div>
                        <button class="hover:text-analytics-blue" x-on:click="removeFilter(filter['column'])">x</button>
                    </div>
                </template>
            </div>
        </button>
    </template>
</div>
