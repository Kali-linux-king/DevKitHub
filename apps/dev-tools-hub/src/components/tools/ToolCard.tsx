import Link from 'next/link'
import { Icons } from "@/components/icons"

export function ToolCard({
  id,
  name,
  description,
  category
}: {
  id: string
  name: string
  description: string
  category: string
}) {
  return (
    <Link
      href={`/tools/${id}`}
      className="border rounded-lg p-4 hover:shadow-md transition-all block group"
    >
      <div className="flex items-start gap-3">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
          <Icons.tool className="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <h3 className="font-medium group-hover:text-blue-600 transition-colors">
            {name}
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </Link>
  )
}