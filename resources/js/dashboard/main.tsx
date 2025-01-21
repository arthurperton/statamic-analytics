import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from '../components/Dashboard'
import { Providers } from '../lib/providers'
import LoadingWrapper from '../components/LoadingWrapper'
import '../../css/app.css'

const container = document.getElementById('app')

if (!container) {
    throw new Error('Failed to find the app container element')
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <Providers>
            <Suspense fallback={<LoadingWrapper />}>
                <Dashboard />
            </Suspense>
        </Providers>
    </StrictMode>
)
