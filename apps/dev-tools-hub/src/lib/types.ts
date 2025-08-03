export type Tool = {
  id: string
  name: string
  description: string
  category: string
  isPremium?: boolean  // Optional
}

export type ToolCategory = {
  [key: string]: Tool[]
}