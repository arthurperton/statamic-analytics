export type StatisticType =
    | 'UniqueVisitors'
    | 'Visits'
    | 'PageViews'
    | 'ViewsPerVisit'
    | 'BounceRate'
    | 'VisitDuration'

export interface Filter {
    column: string
    value: string | number
}

export interface StatCardProps {
    title: string
    value: number | string
    unit?: string
    decimals?: number
    statistic?: StatisticType
    onSelect?: (statistic: StatisticType) => void
    selected?: boolean
}

export interface BreakdownCardProps {
    title: string
    tabs: string[]
    children: React.ReactNode
}

export interface DataComponentProps<T> {
    period: string
    filters: Record<string, Filter>
    children: (data: T) => React.ReactNode
}

export interface TrendDataProps
    extends Omit<DataComponentProps<any>, 'children'> {
    statistic: StatisticType
    children: (data: any) => React.ReactNode
}

export interface StatsResponse {
    uniqueVisitors: number
    visits: number
    pageviews: number
    viewsPerVisit: number
    bounceRate: number
    visitDuration: number
}

export interface ApiResponse<T> {
    data: T
    meta?: any
}
