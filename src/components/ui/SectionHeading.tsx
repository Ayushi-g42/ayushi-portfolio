'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={cn('flex flex-col gap-3 mb-14', alignment, className)}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-500 dark:text-accent-400">
          <span className="w-6 h-px bg-accent-500 dark:bg-accent-400 inline-block" />
          {label}
          <span className="w-6 h-px bg-accent-500 dark:bg-accent-400 inline-block" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-text-muted max-w-xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
