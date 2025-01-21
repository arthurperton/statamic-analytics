import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataComponentProps } from '../../types/dashboard'
import * as api from '../../lib/api'

export default function PagesData({
    period,
    filters,
    children,
}: DataComponentProps<any>) {
    const { data } = useQuery({
        queryKey: ['pages', period, filters],
        queryFn: () => api.fetchTopPages({ period, filters }),
    })
    return <>{children(data)}</>
}
