@extends('statamic::layout')
@section('title', __('Analytics'))
@section('content-class', 'analytics-main')
@section('wrapper_class', 'analytics-page-wrapper')

@section('content')

<iframe src="/cp/analytics/dashboard-content" class="w-full h-full"></iframe>

@endsection
