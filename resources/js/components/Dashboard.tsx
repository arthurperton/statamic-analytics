import React, { Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import PeriodSelector from './PeriodSelector'
import Filters from './Filters'
import TopList from './TopList'
import TrendChart from './TrendChart'
import { LoadingWrapper } from './LoadingWrapper'
import * as api from '../lib/api'
import { ErrorBoundary } from './ErrorBoundary'

type StatisticType =
    | 'UniqueVisitors'
    | 'Visits'
    | 'PageViews'
    | 'ViewsPerVisit'
    | 'BounceRate'
    | 'VisitDuration'

interface Filter {
    column: string
    value: string | number
}

interface StatCardProps {
    title: string
    value: number | string
    unit?: string
    decimals?: number
    statistic?: StatisticType
    onSelect?: (statistic: StatisticType) => void
    selected?: boolean
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

interface StatsResponse {
    uniqueVisitors: number
    visits: number
    pageviews: number
    viewsPerVisit: number
    bounceRate: number
    visitDuration: number
}

// Separate components for each data section
const Stats: React.FC<DataComponentProps<StatsResponse>> = ({
    period,
    filters,
    children,
}) => {
    const { data, error } = useQuery({
        queryKey: ['stats', period, filters],
        queryFn: () => api.fetchStats({ period, filters }),
    })

    if (error) {
        console.error('Stats error:', error)
        return <div>Error loading stats</div>
    }

    return (
        <>
            {children(
                data || {
                    uniqueVisitors: 0,
                    visits: 0,
                    pageviews: 0,
                    viewsPerVisit: 0,
                    bounceRate: 0,
                    visitDuration: 0,
                }
            )}
        </>
    )
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
            <ErrorBoundary>
                <Suspense
                    fallback={<LoadingWrapper>Loading stats...</LoadingWrapper>}
                >
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        <Stats period={period} filters={filters}>
                            {(data: StatsResponse) => (
                                <>
                                    <StatCard
                                        title="Unique visitors"
                                        value={data.uniqueVisitors}
                                        statistic="UniqueVisitors"
                                        onSelect={setStatistic}
                                        selected={
                                            statistic === 'UniqueVisitors'
                                        }
                                    />
                                    <StatCard
                                        title="Visits"
                                        value={data.visits}
                                        statistic="Visits"
                                        onSelect={setStatistic}
                                        selected={statistic === 'Visits'}
                                    />
                                    <StatCard
                                        title="Page views"
                                        value={data.pageviews}
                                        statistic="PageViews"
                                        onSelect={setStatistic}
                                        selected={statistic === 'PageViews'}
                                    />
                                    <StatCard
                                        title="Views per visit"
                                        value={data.viewsPerVisit}
                                        decimals={1}
                                        statistic="ViewsPerVisit"
                                        onSelect={setStatistic}
                                        selected={statistic === 'ViewsPerVisit'}
                                    />
                                    <StatCard
                                        title="Bounce rate"
                                        value={data.bounceRate}
                                        unit="%"
                                        statistic="BounceRate"
                                        onSelect={setStatistic}
                                        selected={statistic === 'BounceRate'}
                                    />
                                    <StatCard
                                        title="Visit duration"
                                        value={data.visitDuration}
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
            </ErrorBoundary>

            {/* Trend chart */}
            <ErrorBoundary>
                <Suspense
                    fallback={<LoadingWrapper>Loading trend...</LoadingWrapper>}
                >
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
            </ErrorBoundary>

            {/* Breakdown */}
            <div className="grid md:grid-cols-2 gap-4">
                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <LoadingWrapper>Loading sources...</LoadingWrapper>
                        }
                    >
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
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <LoadingWrapper>Loading pages...</LoadingWrapper>
                        }
                    >
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
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <LoadingWrapper>
                                Loading locations...
                            </LoadingWrapper>
                        }
                    >
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
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense
                        fallback={
                            <LoadingWrapper>Loading devices...</LoadingWrapper>
                        }
                    >
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
                                                items={
                                                    devices?.operatingSystems
                                                }
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
                </ErrorBoundary>
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

const BreakdownCard: React.FC<BreakdownCardProps> = ({
    title,
    tabs,
    children,
}) => {
    return (
        <Card className="animate-slide-in">
            <CardHeader>
                <h3 className="text-lg font-medium">{title}</h3>
            </CardHeader>
            <Tabs defaultValue={tabs[0]} className="p-6">
                {tabs.map((tab) => (
                    <TabsContent key={tab} value={tab}>
                        {children}
                    </TabsContent>
                ))}
            </Tabs>
        </Card>
    )
}

export default Dashboard
