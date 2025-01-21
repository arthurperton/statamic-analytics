import React from 'react'
import Spinner from './ui/spinner'

const LoadingWrapper: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <Spinner size={8} />
        </div>
    )
}

export default LoadingWrapper
