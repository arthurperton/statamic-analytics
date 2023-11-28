<div class="flex-1 shadow-md bg-white rounded-xl px-4 py-3">
    
    <div class="w-full flex justify-between">
        <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
        <ul class="flex gap-4">
            <li><button>Hoi</button></li>
            <li><button>Pipelio</button></li>
        </ul>
    </div>

    <div class="w-full grid grid-cols-2">
        @foreach ($this->columns() as $column)
            <div class="{{ $column->align == 'right' ? 'text-right' : 'text-left' }}">{{ $column->display }}</div>
        @endforeach

        @foreach ($this->items() as $item)
            @foreach ($this->columns() as $column)
                <div class="truncate {{ $column->align == 'right' ? 'text-right' : 'text-left' }}">{{ $item->{$column->name} }}</div>
            @endforeach
        @endforeach
    </div>

</div>
