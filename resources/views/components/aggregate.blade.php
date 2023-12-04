<a
    role="button"
    class="flex-1 block max-w-xs shadow-md bg-white rounded-xl px-4 py-3 border-2" 
    :class="statistic === '{{ $query }}' ? 'border-analytics-blue' : 'border-white'"
    x-data="{
        value: undefined,
        loading: false,
        async updateValue() {
            this.loading = true
            this.value = await fetchData({ query: '{{ $query }}' })
            this.loading = false
        },
        displayValue() {
            if (this.loading) {
                return '...'
            }

            return this.value 
                ? this.value.toFixed({{ $decimals ?? 0 }})
                : '&nbsp;'
        },
    }"
    x-init="
        updateValue()
        $watch('period, filters', () => updateValue())
    "
>
    <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
    <div
        class="relative font-medium text-slate-700 text-2xl text-right"
        x-text="displayValue()"
    >
       
    
    </div>
</a>
