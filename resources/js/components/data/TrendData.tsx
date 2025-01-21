import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { TrendDataProps } from '../../types/dashboard'
import * as api from '../../lib/api'

export default function TrendData({
    period,
    filters,
    statistic,
    children,
}: TrendDataProps) {
    const { data } = useQuery({
        queryKey: ['trend', period, filters, statistic],
        queryFn: () => api.fetchTrend({ period, filters }),
    })
    return <>{children(data)}</>
}
