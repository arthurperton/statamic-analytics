@extends('statamic::layout')
@section('title', __('Analytics'))
@section('wrapper_class', 'max-w-2xl')

@section('content')

    <div>
        <header class="mb-3">
            <h1>@yield('title')</h1>
        </header>
             

        <analytics-dashboard>
        </analytics-dashboard>
        
    </div>

@endsection
