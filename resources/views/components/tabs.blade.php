<div
    class="h-96 flex flex-col shadow-md bg-white rounded-xl px-4 py-3"
    x-data="{
        tabIndex: 0,
    }"
>
    <div class="flex-0 flex justify-between">
        <h3 class="mb-1 text-slate-700 text-base font-medium">{{ $title }}</h3>
        @if (count($tabs) > 1)
            <ul class="flex gap-2">
                @foreach ($tabs as $index => $title)
                    <li>
                        <button 
                            :class="tabIndex === {{ $index }} ? 'text-analytics-blue' : ''" 
                            x-on:click="tabIndex = {{ $index }}"
                        >
                            {{ $title }}
                        </button>
                    </li>
                @endforeach
            </ul>
        @endif
    </div>

    <div class="flex-1">
        @for ($i = 0; $i < count($tabs); $i++)
            <div
                class="h-full"
                x-show="tabIndex === {{ $i }}"
                x-data="{ tabVisible: tabIndex === {{ $i }} }"
                x-init="$watch('tabIndex', () => tabVisible = (tabIndex === {{ $i }}))"
            >
                {{ ${"tab$i"} }}
            </div>
        @endfor
    </div>
</div>
