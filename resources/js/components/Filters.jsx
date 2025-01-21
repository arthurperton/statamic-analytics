import React from 'react'
import { Badge } from './ui/badge'
import { X } from 'lucide-react'

const Filters = ({ filters = {}, onRemoveFilter }) => {
    if (Object.keys(filters).length === 0) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-2 ml-4">
            {Object.values(filters).map((filter) => (
                <Badge
                    key={filter.column}
                    variant="secondary"
                    className="pl-2 pr-1 py-1 gap-1 cursor-pointer hover:bg-secondary/90"
                    onClick={() => onRemoveFilter(filter.column)}
                >
                    <span>
                        {filter.column}: {filter.value}
                    </span>
                    <X className="h-3 w-3" />
                </Badge>
            ))}
        </div>
    )
}

export default Filters
