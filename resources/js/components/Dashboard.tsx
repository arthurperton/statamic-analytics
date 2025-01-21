import React, { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent } from './ui/tabs'
import PeriodSelector from './PeriodSelector'
import Filters from './Filters'
import TopList from './TopList'
import TrendChart from './TrendChart'
import { LoadingWrapper } from './LoadingWrapper'
import { ErrorBoundary } from './ErrorBoundary'
import StatCard from './StatCard'
import BreakdownCard from './BreakdownCard'
import Stats from './data/Stats'
import TrendData from './data/TrendData'
import SourcesData from './data/SourcesData'
import PagesData from './data/PagesData'
import LocationsData from './data/LocationsData'
import DevicesData from './data/DevicesData'
import { Filter, StatisticType, StatsResponse } from '../types/dashboard'

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

export default Dashboard
