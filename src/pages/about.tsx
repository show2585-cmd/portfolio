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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        {siteConfig.summary}
      </p>

      <h2 className="mt-12 text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.title] ?? Code2
          return (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="size-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
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
