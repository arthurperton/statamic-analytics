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

async function queryEndpoint(endpoint: string, options: FetchOptions = {}) {
    const { period, filters = {} } = options
    const response = await fetch(`${BASE_URL}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify({
            endpoint,
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

export async function fetchStats(options: FetchOptions = {}) {
    return fetch(`${BASE_URL}/stats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify({
            period: options.period || '7',
            filters: options.filters || {},
        }),
    }).then(async (response) => {
        if (!response.ok) {
            console.error('Stats error:', response.status, response.statusText)
            throw new Error('Failed to fetch stats')
        }
        const data = await response.json()
        console.log('Stats response:', data)
        return data
    })
}

export async function fetchTrend(options: FetchOptions = {}) {
    return queryEndpoint('trend', options)
}

export async function fetchTopSources(options: FetchOptions = {}) {
    return queryEndpoint('sources', options)
}

export async function fetchTopPages(options: FetchOptions = {}) {
    return queryEndpoint('pages', options)
}

export async function fetchLocations(options: FetchOptions = {}) {
    return queryEndpoint('locations', options)
}

export async function fetchDevices(options: FetchOptions = {}) {
    return queryEndpoint('devices', options)
}
