<div
    class="w-full grid grid-cols-[1fr_max-content] gap-1"
    x-data="{
        items: [],
        async updateData() {
            const data = await fetchData({ query: '{{ $query }}' })
            
            this.items = data
        },
    }"
    x-init="
        updateData()
        
        $watch('period, filters', () => updateData())
    "
>

    <div class="">{{ $columnTitle }}</div>
    <div class="text-right">Visitors</div>

    <template x-for="item in items">
        <div class="contents">
            <div class="relative px-2 py-1 font-light text-sm truncate">

                {{-- Percentage bar --}}
                <div 
                    class="absolute top-0 left-0 h-full bg-analytics-blue/5"
                    :style="`width: ${(100 * item.visitors) / items[0].visitors}%;`"
                ></div>

                {{-- Value --}}
                <button 
                    class="relative flex items-center"
                    x-on:click.prevent="filterBy(item.value, item.displayValue ?? item.value)"
                >
                    <template x-if="item.icon">
                        <span class="text-lg m-0 p-0 leading-[1] mr-1.5">
                            <template x-if="item.iconType === 'url'">
                                <img style="width: 1em; height: 1em;" :src="item.icon" />
                            </template>
                            <template x-if="!item.iconType">
                                <span x-text="item.icon"></span>
                            </template>
                        </span>
                    </template>

                    <span x-text="item.displayValue ?? item.value"></span>
                </button>
            </div>

            {{-- Visitors --}}
            <div class="text-right" x-text="item.visitors"></div>
        </div>
    </template>
</div>
