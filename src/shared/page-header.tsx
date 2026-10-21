import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  index: string
  eyebrow: string
  title: string
  description?: ReactNode
  action?: ReactNode
  className?: string
}

export function PageHeader({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex flex-wrap items-end justify-between gap-6 border-b pb-10',
        className,
      )}
    >
      <div className="max-w-3xl">
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          <span className="tabular-nums text-foreground">{index}</span>
          <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tighter sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
      {action}
    </header>
  )
}
