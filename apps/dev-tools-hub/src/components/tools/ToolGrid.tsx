import { ToolCard } from './ToolCard'
import { Tool } from '@/lib/types'

interface ToolGridProps {
  tools: Tool[]
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <ToolCard 
          key={tool.id}
          id={tool.id}
          name={tool.name}
          description={tool.description}
          category={tool.category}
        />
      ))}
    </div>
  )
}