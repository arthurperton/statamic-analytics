import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from '../components/Dashboard'
import '../../css/app.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <StrictMode>
        <Dashboard />
    </StrictMode>
)
