import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { DataComponentProps } from '../../types/dashboard'
import * as api from '../../lib/api'

export default function DevicesData({
    period,
    filters,
    children,
}: DataComponentProps<any>) {
    const { data } = useQuery({
        queryKey: ['devices', period, filters],
        queryFn: () => api.fetchDevices({ period, filters }),
    })
    return <>{children(data)}</>
}
