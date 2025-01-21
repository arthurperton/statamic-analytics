import React from 'react'

interface TopListItem {
    count: number
    [key: string]: string | number // For dynamic column names
}

interface TopListProps {
    items?: TopListItem[]
    columnName: string
    columnTitle?: string
    barColor?: string
}

const TopList: React.FC<TopListProps> = ({
    items = [],
    columnName,
    columnTitle,
    barColor = 'bg-analytics-blue/5',
}) => {
    if (items.length === 0) {
        return (
            <div className="text-sm text-muted-foreground">
                No data available
            </div>
        )
    }

    const maxValue = Math.max(...items.map((item) => item.count))

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index} className="relative">
                    <div
                        className={`absolute inset-0 ${barColor} rounded`}
                        style={{
                            width: `${(item.count / maxValue) * 100}%`,
                            transition: 'width 0.3s ease-in-out',
                        }}
                    />
                    <div className="relative flex items-center justify-between p-2">
                        <span
                            className="text-sm font-medium truncate"
                            title={String(item[columnName])}
                        >
                            {item[columnName]}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">
                            {item.count}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopList
