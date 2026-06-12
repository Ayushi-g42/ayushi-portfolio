'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline' | 'success'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const variants = {
    default: 'bg-dark-surface2 dark:bg-dark-surface2 text-text-muted border border-dark-border',
    accent:  'bg-accent-500/10 text-accent-400 border border-accent-500/20',
    outline: 'bg-transparent text-text-muted border border-dark-border hover:border-accent-500/40 hover:text-accent-400 transition-colors',
    success: 'bg-success/10 text-success border border-success/20',
  }

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.span>
  )
}
