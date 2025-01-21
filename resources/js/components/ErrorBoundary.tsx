import React from 'react'

interface Props {
    children: React.ReactNode
    fallback?: React.ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Something went wrong
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {this.state.error?.message ||
                            'An error occurred while loading this component'}
                    </p>
                </div>
            )
        }

        return this.props.children
    }
}
