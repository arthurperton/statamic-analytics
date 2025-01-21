import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataComponentProps } from '../../types/dashboard'
import * as api from '../../lib/api'

export default function LocationsData({
    period,
    filters,
    children,
}: DataComponentProps<any>) {
    const { data } = useQuery({
        queryKey: ['locations', period, filters],
        queryFn: () => api.fetchLocations({ period, filters }),
    })
    return <>{children(data)}</>
}
