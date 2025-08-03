import { ToolGrid } from '@/components/tools/ToolGrid'
import { tools } from '@/lib/constants'

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  // Find the matching category key
  const categoryKey = Object.keys(tools).find(key => 
    key.toLowerCase().includes(params.category.toLowerCase())
  )
  
  if (!categoryKey) {
    return <div className="p-8 text-center">Category not found</div>
  }

  // Map tools with proper typing
  const categoryTools = tools[categoryKey as keyof typeof tools].map(tool => ({
    ...tool,
    category: params.category
  }))

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">{categoryKey}</h1>
      <ToolGrid tools={categoryTools} />
    </div>
  )
}