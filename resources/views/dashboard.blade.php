@extends('statamic::layout')
@section('title', __('Analytics'))
@section('wrapper_class', 'max-w-2xl')

@section('content')

    <div>
        <header class="mb-3">
            <h1>@yield('title')</h1>
        </header>
        <div class="card p-4 mb-5">
            <h2>Last 7 days</h2>
            <h3>General</h3>
            Unique Visitors: {{ $visitors }}<br/>
            Total visits: {{ $visits }}<br/>
            Pageviews: {{ $pageviews }}<br/>
            Views per Visit: {{ number_format($views, 2) }}<br/>
            Visit Duration: {{ round($duration) }}s<br/>
            <h3>Locations</h3>
            <ul>
            @foreach ($locations as $location)
                <li>{{ $location->country }}: {{ $location->visitors }}</li>
            @endforeach
            </ul>
            {{-- <analytics-dashboard>
            </analytics-dashboard> --}}
        </div>
    </div>

@endsection
