import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import { PageHeader } from '@/shared/page-header'
import { sideProjects } from '@/features/side-projects/data'

export default function SideProjects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 animate-in fade-in slide-in-from-bottom-2 duration-700 motion-reduce:animate-none">
      <PageHeader
        index="03"
        eyebrow="Playground"
        title="Side Projects"
        description="바이브 코딩/개인 공부용으로 진행한 사이드 프로젝트를 소개합니다."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {sideProjects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              'group/side transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:ring-foreground/20',
              project.image && 'pt-0',
            )}
          >
            {project.image && (
              <div className="overflow-hidden border-b">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover/side:scale-[1.03]"
                />
              </div>
            )}
            <CardHeader>
              <span className="text-xs text-muted-foreground tabular-nums">
                {project.period}
              </span>
              <CardTitle className="mt-1 text-lg font-semibold tracking-tight">
                {project.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-5">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t pt-4">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    사이트 바로가기
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
