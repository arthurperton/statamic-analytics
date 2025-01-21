import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Tabs, TabsContent } from './ui/tabs'
import { BreakdownCardProps } from '../types/dashboard'

export default function BreakdownCard({
    title,
    tabs,
    children,
}: BreakdownCardProps) {
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
