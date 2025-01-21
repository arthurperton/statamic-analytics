import React from 'react'
import { Card, CardHeader } from './ui/card'
import { StatCardProps } from '../types/dashboard'

export default function StatCard({
    title,
    value,
    unit = '',
    decimals = 0,
    statistic,
    onSelect,
    selected,
}: StatCardProps) {
    return (
        <Card
            className={`cursor-pointer ${
                selected ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => statistic && onSelect?.(statistic)}
        >
            <CardHeader>
                <div className="text-sm font-medium">{title}</div>
                <div className="text-2xl font-bold">
                    {typeof value === 'number'
                        ? value.toFixed(decimals)
                        : value}
                    {unit && (
                        <span className="text-sm font-normal ml-1">{unit}</span>
                    )}
                </div>
            </CardHeader>
        </Card>
    )
}
