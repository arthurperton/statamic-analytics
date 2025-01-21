import React from 'react'
import { useQuery } from '@tanstack/react-query'
import {
    DataComponentProps,
    StatsResponse,
    ApiResponse,
} from '../../types/dashboard'
import * as api from '../../lib/api'

export default function Stats({
    period,
    filters,
    children,
}: DataComponentProps<StatsResponse>) {
    const { data: response, error } = useQuery<ApiResponse<StatsResponse>>({
        queryKey: ['stats', period, filters],
        queryFn: () => api.fetchStats({ period, filters }),
    })

    if (error) {
        console.error('Stats error:', error)
        return <div>Error loading stats</div>
    }

    return (
        <>
            {children(
                response?.data || {
                    uniqueVisitors: 0,
                    visits: 0,
                    pageviews: 0,
                    viewsPerVisit: 0,
                    bounceRate: 0,
                    visitDuration: 0,
                }
            )}
        </>
    )
}
