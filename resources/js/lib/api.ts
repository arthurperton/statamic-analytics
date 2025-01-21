import { ApiResponse, StatsResponse } from '../types/dashboard'

interface FetchOptions {
    period?: string
    filters?: Record<string, any>
}

const BASE_URL = '/cp/analytics/dashboard'

// Get the CSRF token from the meta tag
function getCsrfToken(): string {
    const metaTag = document.querySelector('meta[name="csrf-token"]')
    return metaTag?.getAttribute('content') || ''
}

async function queryEndpoint<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<ApiResponse<T>> {
    const { period, filters = {} } = options
    const response = await fetch(`${BASE_URL}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify({
            query: endpoint,
            period: period || '7',
            filters,
        }),
    })

    if (!response.ok) {
        console.error(
            `${endpoint} error:`,
            response.status,
            response.statusText
        )
        throw new Error(`Failed to fetch ${endpoint}`)
    }

    const data = await response.json()
    console.log(`${endpoint} response:`, data)
    return data
}

export async function fetchStats(
    options: FetchOptions = {}
): Promise<ApiResponse<StatsResponse>> {
    const [
        uniqueVisitors,
        visits,
        pageviews,
        viewsPerVisit,
        bounceRate,
        visitDuration,
    ] = await Promise.all([
        queryEndpoint<number>('UniqueVisitors', options),
        queryEndpoint<number>('Visits', options),
        queryEndpoint<number>('Pageviews', options),
        queryEndpoint<number>('ViewsPerVisit', options),
        queryEndpoint<number>('BounceRate', options),
        queryEndpoint<number>('VisitDuration', options),
    ])

    return {
        data: {
            uniqueVisitors: uniqueVisitors.data,
            visits: visits.data,
            pageviews: pageviews.data,
            viewsPerVisit: viewsPerVisit.data,
            bounceRate: bounceRate.data,
            visitDuration: visitDuration.data,
        },
    }
}

export async function fetchTrend(
    options: FetchOptions = {}
): Promise<ApiResponse<any>> {
    return queryEndpoint('trend', options)
}

export async function fetchTopSources(
    options: FetchOptions = {}
): Promise<ApiResponse<any>> {
    return queryEndpoint('sources', options)
}

export async function fetchTopPages(
    options: FetchOptions = {}
): Promise<ApiResponse<any>> {
    return queryEndpoint('pages', options)
}

export async function fetchLocations(
    options: FetchOptions = {}
): Promise<ApiResponse<any>> {
    return queryEndpoint('locations', options)
}

export async function fetchDevices(
    options: FetchOptions = {}
): Promise<ApiResponse<any>> {
    return queryEndpoint('devices', options)
}
