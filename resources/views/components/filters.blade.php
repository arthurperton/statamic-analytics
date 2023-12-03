<div class="ml-4 flex gap-2">
    <template x-for="filter in filters">
        <div class="flex items-center bg-white rounded-md shadow-md">
            <div class="pl-3 py-1">
                <span x-text="`${filter['title']} is `"></span>
                <span x-text="filter['displayValue']" class="font-bold"></span>
            </div>
            <button class="pl-3 pr-3 hover:text-analytics-blue" x-on:click="removeFilter(filter['column'])">x</button>
        </div>
    </template>
</div>
