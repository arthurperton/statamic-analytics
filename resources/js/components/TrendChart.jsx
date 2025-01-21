import React from 'react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { format } from 'date-fns'

const TrendChart = ({ data = [], statistic = 'UniqueVisitors' }) => {
    const formatXAxis = (timestamp) => {
        return format(new Date(timestamp), 'MMM d')
    }

    const formatTooltip = (value, name) => {
        return [value, name === 'value' ? statistic : name]
    }

    return (
        <div className="h-[300px] w-full animate-fade-in">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorValue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#2D9CF9"
                                stopOpacity={0.1}
                            />
                            <stop
                                offset="95%"
                                stopColor="#2D9CF9"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="timestamp"
                        tickFormatter={formatXAxis}
                        stroke="#94a3b8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={40}
                    />
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e2e8f0"
                    />
                    <Tooltip
                        formatter={formatTooltip}
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '12px',
                            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                        }}
                        labelStyle={{ color: '#64748b', marginBottom: '4px' }}
                        labelFormatter={(timestamp) =>
                            format(new Date(timestamp), 'MMMM d, yyyy')
                        }
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2D9CF9"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TrendChart
