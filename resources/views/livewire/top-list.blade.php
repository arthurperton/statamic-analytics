<div class="w-full grid grid-cols-[1fr_max-content] gap-1">

    <div class="">{{ $this->columnTitle }}</div>
    <div class="text-right">Visitors</div>

    @foreach ($this->items as $item)
        <div class="relative px-2 py-1 font-light text-sm truncate">

            {{-- Percentage bar --}}
            <div class="absolute top-0 left-0 h-full bg-analytics-blue/5"
                style="width: {{ (100 * $item->visitors) / $this->items->get(0)->visitors }}%;"></div>

            {{-- Value --}}
            <button class="relative flex items-center"
                wire:click.prevent="filterBy('{{ $item->value }}', '{{ $item->displayValue ?? $item->value }}')">
                @if (isset($item->icon))
                    <span class="text-lg m-0 p-0 leading-[1] mr-1.5">
                        @switch($item->iconType ?? null)
                            @case('url')
                                <img style="width: 1em; height: 1em;" src="{{ $item->icon }}" />
                            @break

                            @default
                                {{ $item->icon }}
                        @endswitch
                    </span>
                @endif
                {{ $item->displayValue ?? $item->value }}
            </button>
        </div>

        {{-- Visitors --}}
        <div class="text-right">
            {{ $item->visitors }}
        </div>
    @endforeach
</div>
