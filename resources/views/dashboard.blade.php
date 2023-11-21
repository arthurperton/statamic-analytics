@extends('statamic::layout')
@section('title', __('Analytics'))
@section('wrapper_class', 'max-w-2xl')

@section('content')

    <iframe src="/cp/analytics/iframecontent" width="100%" height="100%"></iframe>

@endsection
