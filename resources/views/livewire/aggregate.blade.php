<a
    role="button"
    class="flex-1 block max-w-xs shadow-md bg-white rounded-xl px-4 py-3 border-2" 
    :class="selected ? 'border-analytics-blue' : 'border-white'"
    x-data="{
        selected: {{ $selected ? 'true' : 'false' }},
    }" 
    @select-statistic.window="selected = ('{{ $query }}' === $event.detail[0])"
    @click.prevent="$dispatch('select-statistic', ['{{ $query }}'])">
    <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
    <div class="font-medium text-slate-700 text-2xl text-right">
        {{ round($this->value, $decimals) }}{{ $unit }}
    </div>
</a>
