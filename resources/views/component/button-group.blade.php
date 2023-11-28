<div 
    class="flex divide-x divide-slate-300 border border-slate-300 rounded-lg overflow-hidden"
    x-data="{
        selected: '{{ $options[0] }}',
        options: [
            @foreach ($options as $option)
            '{{ $option }}', 
            @endforeach
        ],
    }"
>
    <template x-for="option in options">
        <button
            class="px-2 py-0.5 text-sm"
            :class="option === selected ? 'shadow-inner bg-slate-50 font-medium' : 'font-light'"
            x-text="option"
            @click.prevent="selected = option"
        ></button>
    </template>
</div>