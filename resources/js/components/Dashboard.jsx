import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import PeriodSelector from './PeriodSelector'
import Filters from './Filters'
import TopList from './TopList'
import TrendChart from './TrendChart'

const Dashboard = () => {
    const [period, setPeriod] = React.useState('7')
    const [filters, setFilters] = React.useState({})
    const [statistic, setStatistic] = React.useState('UniqueVisitors')

    const removeFilter = (key) => {
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
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <StatCard
                    title="Unique Visitors"
                    value="0"
                    statistic="UniqueVisitors"
                    onSelect={setStatistic}
                    selected={statistic === 'UniqueVisitors'}
                />
                <StatCard
                    title="Total Visits"
                    value="0"
                    statistic="Visits"
                    onSelect={setStatistic}
                    selected={statistic === 'Visits'}
                />
                <StatCard
                    title="Pageviews"
                    value="0"
                    statistic="Pageviews"
                    onSelect={setStatistic}
                    selected={statistic === 'Pageviews'}
                />
                <StatCard
                    title="Views per Visit"
                    value="0"
                    decimals={2}
                    statistic="ViewsPerVisit"
                    onSelect={setStatistic}
                    selected={statistic === 'ViewsPerVisit'}
                />
                <StatCard
                    title="Bounce Rate"
                    value="0"
                    unit="%"
                    statistic="BounceRate"
                    onSelect={setStatistic}
                    selected={statistic === 'BounceRate'}
                />
                <StatCard
                    title="Visit Duration"
                    value="0"
                    unit="s"
                    statistic="VisitDuration"
                    onSelect={setStatistic}
                    selected={statistic === 'VisitDuration'}
                />
            </div>

            {/* Trend chart */}
            <Card className="animate-slide-in">
                <CardHeader>
                    <CardTitle>Trend</CardTitle>
                </CardHeader>
                <CardContent>
                    <TrendChart statistic={statistic} />
                </CardContent>
            </Card>

            {/* Breakdown */}
            <div className="grid md:grid-cols-2 gap-4">
                <BreakdownCard title="Top Sources" tabs={['All']}>
                    <TopList
                        columnName="source"
                        columnTitle="Source"
                        barColor="bg-analytics-blue/5"
                    />
                </BreakdownCard>

                <BreakdownCard title="Top Pages" tabs={['Pages']}>
                    <TopList
                        columnName="path"
                        columnTitle="Page"
                        barColor="bg-analytics-green/5"
                    />
                </BreakdownCard>

                <BreakdownCard title="Locations" tabs={['Countries']}>
                    <TopList
                        columnName="country"
                        columnTitle="Country"
                        barColor="bg-analytics-yellow/10"
                    />
                </BreakdownCard>

                <BreakdownCard title="Devices" tabs={['Browser', 'OS', 'Size']}>
                    <Tabs defaultValue="Browser">
                        <TabsContent value="Browser">
                            <TopList
                                columnName="browser"
                                columnTitle="Browser"
                                barColor="bg-analytics-blue/5"
                            />
                        </TabsContent>
                        <TabsContent value="OS">
                            <TopList
                                columnName="os"
                                columnTitle="Operating system"
                                barColor="bg-analytics-blue/5"
                            />
                        </TabsContent>
                        <TabsContent value="Size">
                            <TopList
                                columnName="device"
                                columnTitle="Device"
                                barColor="bg-analytics-blue/5"
                            />
                        </TabsContent>
                    </Tabs>
                </BreakdownCard>
            </div>
        </div>
    )
}

const StatCard = ({
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

const BreakdownCard = ({ title, tabs, children }) => {
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
