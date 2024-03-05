<button
    class="flex-1 block max-w-xs shadow-md bg-white rounded-xl px-4 py-3 border-2 text-left" 
    :class="statistic === '{{ $query }}' ? 'border-analytics-blue' : 'border-white'"
    x-on:click.prevent="statistic = '{{ $query }}'"
    x-data="{
        value: undefined,
        loading: true,
        async updateValue() {
            this.loading = true
            this.value = await fetchData({ query: '{{ $query }}' })
            this.loading = false
        },
        displayValue() {
            if (!this.value) {
                return '&nbsp;'
            }

            const value = this.value.toFixed({{ $decimals ?? 0 }})
            
            return `${value}{{ $unit ?? '' }}`
        },
    }"
    x-init="
        updateValue()

        $watch('[period, filters]', () => updateValue())
    "
>
    <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
    <div
        class="relative font-medium text-slate-700 text-2xl"
    >
        
        <div 
            class="text-right"
            {{-- class="transition-opacity duration-150" --}}
            {{-- :class="loading ? 'opacity-0' : 'opacity-300'" --}}
            x-text="displayValue()"
        ></div>
        <div 
            class="absolute inset-0 flex justify-end items-center bg-white transition-opacity duration-200 ease-in-out"
            :class="loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        >
            <x-analytics::spinner />
        </div>
       
    
    </div>
</button>
