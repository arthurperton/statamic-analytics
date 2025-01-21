interface FetchOptions {
    period?: string
    filters?: Record<string, any>
}

export async function fetchStats({ period, filters = {} }: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/stats?${params}`)
    if (!response.ok) throw new Error('Failed to fetch stats')
    return response.json()
}

export async function fetchTrend({ period, filters = {} }: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/trend?${params}`)
    if (!response.ok) throw new Error('Failed to fetch trend')
    return response.json()
}

export async function fetchTopSources({
    period,
    filters = {},
}: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/sources?${params}`)
    if (!response.ok) throw new Error('Failed to fetch sources')
    return response.json()
}

export async function fetchTopPages({
    period,
    filters = {},
}: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/pages?${params}`)
    if (!response.ok) throw new Error('Failed to fetch pages')
    return response.json()
}

export async function fetchLocations({
    period,
    filters = {},
}: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/locations?${params}`)
    if (!response.ok) throw new Error('Failed to fetch locations')
    return response.json()
}

export async function fetchDevices({
    period,
    filters = {},
}: FetchOptions = {}) {
    const params = new URLSearchParams({
        period: period || '7',
        ...filters,
    })

    const response = await fetch(`/cp/analytics/devices?${params}`)
    if (!response.ok) throw new Error('Failed to fetch devices')
    return response.json()
}
