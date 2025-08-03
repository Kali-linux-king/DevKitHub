'use client'
import { cn } from '@/lib/utils'
import * as React from 'react'

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: {
  className?: string
  variant?: 'default' | 'premium'
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variant === 'premium' 
          ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900'
          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}