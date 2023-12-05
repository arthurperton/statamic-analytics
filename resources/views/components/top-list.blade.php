<div 
    class="relative h-full"
    x-data="{
        items: [],
        loading: true,
        async updateData() {
            this.loading = true
            
            const data = await fetchData({ query: '{{ $query }}' })
            
            this.items = data

            this.loading = false
        },
        filterBy(value, displayValue) {
            setFilter({
                value,
                displayValue,
                column: '{{ $columnName }}',
                title: '{{ $columnTitle }}',
            })
        }
    }"
    x-init="
        updateData()
        
        $watch('[period, filters]', () => updateData())
    "
>
    <div
        class="w-full grid grid-cols-[1fr_max-content] gap-1"
       
    >

        {{-- Column headers --}}
        <div class="">{{ $columnTitle }}</div>
        <div class="text-right">Visitors</div>

        {{-- Data rows --}}
        <template x-for="item in items">
            <div class="contents">
                <div class="relative px-2 py-1 font-light text-sm truncate">

                    {{-- Percentage bar --}}
                    <div 
                        class="absolute top-0 left-0 h-full {{ $barColor ?? 'bg-analytics-blue/5' }}"
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
    <div 
        class="absolute inset-0 flex justify-center items-center bg-white transition-opacity duration-200 ease-in-out"
        :class="loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
        <x-analytics::spinner size="8" />
    </div>
</div>
