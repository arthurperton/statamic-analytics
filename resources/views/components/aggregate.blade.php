<a
    role="button"
    class="flex-1 block max-w-xs shadow-md bg-white rounded-xl px-4 py-3 border-2" 
    :class="statistic === '{{ $query }}' ? 'border-analytics-blue' : 'border-white'"
    x-data="{
        value: undefined,
        async updateValue() {
            this.value = await fetchData('{{ $query }}')
        }
    }"
    x-init="
        updateValue()
        $watch('period', () => updateValue())
    "
>
    <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
    <div 
        class="font-medium text-slate-700 text-2xl text-right"
        x-text="value ? value.toFixed({{ $decimals ?? 0 }}): '&nbsp;'"
    >
    
    </div>
</a>
