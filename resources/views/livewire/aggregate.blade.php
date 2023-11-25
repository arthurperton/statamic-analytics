<div class="flex-1 max-w-xs shadow-md bg-white rounded-xl px-4 py-3 border bborder-blue-500">
    <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
    <div class="font-medium text-slate-700 text-2xl text-right transition-all duration-150" wire:loading.class="opacity-0 -translate-y-1">
        {{ round($this->value, $decimals) }}{{ $unit }}
    </div>
</div>
