import { ToolGrid } from '@/components/tools/ToolGrid'
import { tools } from '@/lib/constants'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sparkles, Rocket } from 'lucide-react'

interface Tool {
  id: string
  name: string
  description: string
  category?: string
  isPremium?: boolean
}

export default function Home() {
  const allTools = Object.entries(tools).flatMap(([category, categoryTools]) =>
    categoryTools.map(tool => ({
      ...tool,
      category: category.toLowerCase().replace(/[^a-z]+/g, '-'),
      isPremium: tool.isPremium || false // Default to false if not specified
    }))
  )

  const totalTools = allTools.length
  const premiumTools = allTools.filter(tool => tool.isPremium).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="premium" className="mb-4 mx-auto">
          <Sparkles className="h-4 w-4 mr-2" />
          {totalTools}+ Powerful Tools
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Supercharge Your Workflow
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          The ultimate developer toolkit with {totalTools} free and premium tools to boost your productivity.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Rocket className="h-5 w-5" />
            Explore Tools
          </Button>
          <Button variant="outline" size="lg">
            See Premium Features ({premiumTools})
          </Button>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(tools).slice(0, 4).map(([category, items]) => (
            <div 
              key={category} 
              className="border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Icons.tool className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold">{category}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {items.length} tools including {items[0].name}, {items[1].name}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* All Tools Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Developer Tools</h2>
          <div className="flex gap-2">
            <Button variant="outline">Most Popular</Button>
            <Button variant="outline">Recently Added</Button>
          </div>
        </div>
        <ToolGrid tools={allTools} />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          Join thousands of developers using our tools daily to save time and work smarter.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Rocket className="h-5 w-5" />
          Get Started Now
        </Button>
      </div>
    </div>
  )
}