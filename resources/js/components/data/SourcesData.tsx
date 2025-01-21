import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataComponentProps } from '../../types/dashboard'
import * as api from '../../lib/api'

export default function SourcesData({
    period,
    filters,
    children,
}: DataComponentProps<any>) {
    const { data } = useQuery({
        queryKey: ['sources', period, filters],
        queryFn: () => api.fetchTopSources({ period, filters }),
    })
    return <>{children(data)}</>
}
