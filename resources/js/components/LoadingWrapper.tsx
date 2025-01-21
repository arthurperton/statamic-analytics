import React from 'react'

interface LoadingWrapperProps {
    children: React.ReactNode
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
    return (
        <div className="flex items-center justify-center p-8 text-sm text-muted-foreground">
            {children}
        </div>
    )
}
