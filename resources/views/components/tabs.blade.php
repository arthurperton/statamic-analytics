<div
    class="flex-1 h-96 shadow-md bg-white rounded-xl px-4 py-3"
    x-data="{
        index: 0,
    }"
>
    <div class="w-full flex justify-between">
        <h2 class="text-slate-500 mb-1">{{ $title }}</h2>
        @if (count($tabs) > 1)
            <ul class="flex gap-2">
                @foreach ($tabs as $index => $tab)
                    <li><button :class="index === {{ $index }} ? 'text-analytics-blue' : ''" @click="index = {{ $index }}">{{ $tab }}</button></li>
                @endforeach
            </ul>
        @endif
    </div>

    <div class="w-full">
        @for ($i = 0; $i < count($tabs); $i++)
            <div x-show="index === {{ $i }}">
                {{ ${"tab$i"} }}
            </div>
        @endfor
    </div>
</div>
