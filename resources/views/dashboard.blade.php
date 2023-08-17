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
            Unique Visitors: {{ $visitors }}<br/>
            Total visits: {{ $visits }}<br/>
            Pageviews: {{ $pageviews }}<br/>
            
            {{-- <analytics-dashboard>
            </analytics-dashboard> --}}
        </div>
    </div>

@endsection
