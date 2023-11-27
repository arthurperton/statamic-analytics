<div class="flex-1 shadow-md bg-white rounded-xl px-4 py-3">
    
    <div class="w-full flex justify-between">
        <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
        <ul class="flex gap-4">
            <li><button>Hoi</button></li>
            <li><button>Pipelio</button></li>
        </ul>
    </div>

    <table class="w-full">
        <thead>
            <tr>
                @foreach ($this->columns() as $column)
                    <th class="{{ $column->align == 'right' ? 'text-right' : 'text-left' }}">{{ $column->display }} ({{ $column->name }})</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($this->items() as $item)
                <tr>
                    @foreach ($this->columns() as $column)
                        <td class="{{ $column->align == 'right' ? 'text-right' : 'text-left' }}">{{ $item->{$column->name} }}</td>
                    @endforeach
        {{-- <div class="flex justify-between gap-8">
            <div class="flex-grow pl-0 truncate">{{ $item[0] }}</div> 
            <div class="text-right">{{ $item[1] }}</div>
        </div> --}}
                </tr>
            @endforeach
        </tbody>
    </table>
    
</div>
