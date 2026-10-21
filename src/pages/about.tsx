import {
  Code2,
  Server,
  ListChecks,
  Palette,
  Gauge,
  Users,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { PageHeader } from '@/shared/page-header'
import { siteConfig } from '@/lib/site-config'
import { skillCategories } from '@/features/skills/data'

const categoryIcons: Record<string, LucideIcon> = {
  'Frontend Development': Code2,
  'Backend Development': Server,
  'State & Form Management': ListChecks,
  'UI / Design System': Palette,
  'Web Quality & Optimization': Gauge,
  'Collaboration & Workflow': Users,
  'Legacy & Migration': RefreshCw,
}

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 animate-in fade-in slide-in-from-bottom-2 duration-700 motion-reduce:animate-none">
      <PageHeader
        index="01"
        eyebrow="Introduction"
        title="About"
        description={siteConfig.summary}
      />

      <div className="mt-14 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <span className="text-sm text-muted-foreground tabular-nums">
          {skillCategories.length} categories
        </span>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.title] ?? Code2
          return (
            <Card
              key={category.title}
              className="transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:ring-foreground/20"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-muted ring-1 ring-foreground/5">
                    <Icon className="size-4.5 text-foreground" />
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
