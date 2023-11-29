
    <div class="w-full grid grid-cols-[1fr_max-content] gap-1">
        
        <div class="">{{ $this->columns->get(0)->display }}</div>
        <div class="text-right">{{ $this->columns->get(1)->display }}</div>

        @foreach ($this->items as $item)
        <div class="relative px-2 py-1 font-light text-sm truncate">
            <div class="absolute top-0 left-0 h-full bg-analytics-blue/5" style="width: {{ 100 * $item->visitors / $this->items->get(0)->visitors }}%;"></div>
            <div class="relative flex items-center">
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
                {{ $item->{$this->columns->get(0)->name} }}
            </div>
        </div>
        <div class="text-right">
            {{ $item->{$this->columns->get(1)->name} }}
        </div>
        @endforeach
    </div>

