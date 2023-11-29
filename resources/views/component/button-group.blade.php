<div class="flex  border border-slate-300 rounded-lg overflow-hidden">
    <template class="contents" x-for="option in options">
        <button
            class="px-2 py-0.5 text-sm border-r border-r-slate-300 last:border-r-0"
            :class="option === selected ? 'shadow-inner bg-slate-50 font-medium' : 'font-light tracking-wide'"
            x-text="option"
            @click.prevent="
                if (options.length === 1) {
                    selected = (selected === option) ? undefined : option
                } else {
                    selected = option
                }
            "
        ></button>
    </template>
</div>