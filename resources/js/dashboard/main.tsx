import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from '../components/Dashboard'
import { Providers } from '../lib/providers'
import { LoadingWrapper } from '../components/LoadingWrapper'
import '../../css/app.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const container = document.getElementById('app')

if (!container) {
    throw new Error('Failed to find the app container element')
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <Providers>
            <Suspense
                fallback={<LoadingWrapper>Loading dashboard...</LoadingWrapper>}
            >
                <Dashboard />
            </Suspense>
        </Providers>
    </StrictMode>
)
