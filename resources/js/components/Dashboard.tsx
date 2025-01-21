import React, { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import PeriodSelector from './PeriodSelector'
import Filters from './Filters'
import TopList from './TopList'
import TrendChart from './TrendChart'
import LoadingWrapper from './LoadingWrapper'
import * as api from '../lib/api'

type StatisticType =
    | 'UniqueVisitors'
    | 'Visits'
    | 'Pageviews'
    | 'ViewsPerVisit'
    | 'BounceRate'
    | 'VisitDuration'

interface Filter {
    column: string
    value: string | number
}

interface StatCardProps {
    title: string
    value: string | number
    unit?: string
    decimals?: number
    statistic: StatisticType
    onSelect: (statistic: StatisticType) => void
    selected: boolean
}

interface BreakdownCardProps {
    title: string
    tabs: string[]
    children: React.ReactNode
}

interface DataComponentProps<T> {
    period: string
    filters: Record<string, Filter>
    children: (data: T) => React.ReactNode
}

interface TrendDataProps extends Omit<DataComponentProps<any>, 'children'> {
    statistic: StatisticType
    children: (data: any) => React.ReactNode
}

// Separate components for each data section
const Stats: React.FC<DataComponentProps<any>> = ({
    period,
    filters,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['stats', period, filters],
        queryFn: () => api.fetchStats({ period, filters }),
    })
    return <>{children(data)}</>
}

const TrendData: React.FC<TrendDataProps> = ({
    period,
    filters,
    statistic,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['trend', period, filters, statistic],
        queryFn: () => api.fetchTrend({ period, filters }),
    })
    return <>{children(data)}</>
}

const SourcesData: React.FC<DataComponentProps<any>> = ({
    period,
    filters,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['sources', period, filters],
        queryFn: () => api.fetchTopSources({ period, filters }),
    })
    return <>{children(data)}</>
}

const PagesData: React.FC<DataComponentProps<any>> = ({
    period,
    filters,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['pages', period, filters],
        queryFn: () => api.fetchTopPages({ period, filters }),
    })
    return <>{children(data)}</>
}

const LocationsData: React.FC<DataComponentProps<any>> = ({
    period,
    filters,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['locations', period, filters],
        queryFn: () => api.fetchLocations({ period, filters }),
    })
    return <>{children(data)}</>
}

const DevicesData: React.FC<DataComponentProps<any>> = ({
    period,
    filters,
    children,
}) => {
    const { data } = useQuery({
        queryKey: ['devices', period, filters],
        queryFn: () => api.fetchDevices({ period, filters }),
    })
    return <>{children(data)}</>
}

const Dashboard: React.FC = () => {
    const [period, setPeriod] = React.useState<string>('7')
    const [filters, setFilters] = React.useState<Record<string, Filter>>({})
    const [statistic, setStatistic] =
        React.useState<StatisticType>('UniqueVisitors')

    const removeFilter = (key: string) => {
        const newFilters = { ...filters }
        delete newFilters[key]
        setFilters(newFilters)
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {/* Title row */}
            <div className="flex items-center mb-2 animate-fade-in">
                <h1 className="flex-shrink-0 text-xl text-slate-700">
                    Analytics Dashboard
                </h1>
                <Filters filters={filters} onRemoveFilter={removeFilter} />
                <PeriodSelector value={period} onChange={setPeriod} />
            </div>

            {/* Aggregates */}
            <Suspense fallback={<LoadingWrapper />}>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    <Stats period={period} filters={filters}>
                        {(stats: any) => (
                            <>
                                <StatCard
                                    title="Unique Visitors"
                                    value={stats?.uniqueVisitors ?? 0}
                                    statistic="UniqueVisitors"
                                    onSelect={setStatistic}
                                    selected={statistic === 'UniqueVisitors'}
                                />
                                <StatCard
                                    title="Total Visits"
                                    value={stats?.visits ?? 0}
                                    statistic="Visits"
                                    onSelect={setStatistic}
                                    selected={statistic === 'Visits'}
                                />
                                <StatCard
                                    title="Pageviews"
                                    value={stats?.pageviews ?? 0}
                                    statistic="Pageviews"
                                    onSelect={setStatistic}
                                    selected={statistic === 'Pageviews'}
                                />
                                <StatCard
                                    title="Views per Visit"
                                    value={stats?.viewsPerVisit ?? 0}
                                    decimals={2}
                                    statistic="ViewsPerVisit"
                                    onSelect={setStatistic}
                                    selected={statistic === 'ViewsPerVisit'}
                                />
                                <StatCard
                                    title="Bounce Rate"
                                    value={stats?.bounceRate ?? 0}
                                    unit="%"
                                    statistic="BounceRate"
                                    onSelect={setStatistic}
                                    selected={statistic === 'BounceRate'}
                                />
                                <StatCard
                                    title="Visit Duration"
                                    value={stats?.visitDuration ?? 0}
                                    unit="s"
                                    statistic="VisitDuration"
                                    onSelect={setStatistic}
                                    selected={statistic === 'VisitDuration'}
                                />
                            </>
                        )}
                    </Stats>
                </div>
            </Suspense>

            {/* Trend chart */}
            <Suspense fallback={<LoadingWrapper />}>
                <Card className="animate-slide-in">
                    <CardHeader>
                        <CardTitle>Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TrendData
                            period={period}
                            filters={filters}
                            statistic={statistic}
                        >
                            {(trend: any) => (
                                <TrendChart
                                    data={trend?.data}
                                    statistic={statistic}
                                />
                            )}
                        </TrendData>
                    </CardContent>
                </Card>
            </Suspense>

            {/* Breakdown */}
            <div className="grid md:grid-cols-2 gap-4">
                <Suspense fallback={<LoadingWrapper />}>
                    <BreakdownCard title="Top Sources" tabs={['All']}>
                        <SourcesData period={period} filters={filters}>
                            {(sources: any) => (
                                <TopList
                                    items={sources?.data}
                                    columnName="source"
                                    columnTitle="Source"
                                    barColor="bg-analytics-blue/5"
                                />
                            )}
                        </SourcesData>
                    </BreakdownCard>
                </Suspense>

                <Suspense fallback={<LoadingWrapper />}>
                    <BreakdownCard title="Top Pages" tabs={['Pages']}>
                        <PagesData period={period} filters={filters}>
                            {(pages: any) => (
                                <TopList
                                    items={pages?.data}
                                    columnName="path"
                                    columnTitle="Page"
                                    barColor="bg-analytics-green/5"
                                />
                            )}
                        </PagesData>
                    </BreakdownCard>
                </Suspense>

                <Suspense fallback={<LoadingWrapper />}>
                    <BreakdownCard title="Locations" tabs={['Countries']}>
                        <LocationsData period={period} filters={filters}>
                            {(locations: any) => (
                                <TopList
                                    items={locations?.data}
                                    columnName="country"
                                    columnTitle="Country"
                                    barColor="bg-analytics-yellow/10"
                                />
                            )}
                        </LocationsData>
                    </BreakdownCard>
                </Suspense>

                <Suspense fallback={<LoadingWrapper />}>
                    <BreakdownCard
                        title="Devices"
                        tabs={['Browser', 'OS', 'Size']}
                    >
                        <DevicesData period={period} filters={filters}>
                            {(devices: any) => (
                                <Tabs defaultValue="Browser">
                                    <TabsContent value="Browser">
                                        <TopList
                                            items={devices?.browsers}
                                            columnName="browser"
                                            columnTitle="Browser"
                                            barColor="bg-analytics-blue/5"
                                        />
                                    </TabsContent>
                                    <TabsContent value="OS">
                                        <TopList
                                            items={devices?.operatingSystems}
                                            columnName="os"
                                            columnTitle="Operating system"
                                            barColor="bg-analytics-blue/5"
                                        />
                                    </TabsContent>
                                    <TabsContent value="Size">
                                        <TopList
                                            items={devices?.sizes}
                                            columnName="device"
                                            columnTitle="Device"
                                            barColor="bg-analytics-blue/5"
                                        />
                                    </TabsContent>
                                </Tabs>
                            )}
                        </DevicesData>
                    </BreakdownCard>
                </Suspense>
            </div>
        </div>
    )
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    unit = '',
    decimals = 0,
    statistic,
    onSelect,
    selected,
}) => {
    return (
        <Card
            className={`animate-slide-in cursor-pointer transition-colors hover:bg-muted/50 ${
                selected ? 'bg-muted/50' : ''
            }`}
            onClick={() => onSelect(statistic)}
        >
            <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium text-slate-500">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="text-2xl font-semibold">
                    {Number(value).toFixed(decimals)}
                    {unit}
                </div>
            </CardContent>
        </Card>
    )
}

const BreakdownCard: React.FC<BreakdownCardProps> = ({
    title,
    tabs,
    children,
}) => {
    return (
        <Card className="animate-slide-in">
            <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-slate-500">
                        {title}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                {tabs.length === 1 ? (
                    children
                ) : (
                    <Tabs defaultValue={tabs[0]} className="w-auto">
                        <div className="flex justify-end mb-4">
                            <TabsList>
                                {tabs.map((tab) => (
                                    <TabsTrigger key={tab} value={tab}>
                                        {tab}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                        {children}
                    </Tabs>
                )}
            </CardContent>
        </Card>
    )
}

export default Dashboard
