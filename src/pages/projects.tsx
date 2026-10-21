import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import { PageHeader } from '@/shared/page-header'
import { experiences } from '@/features/projects/data'

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 animate-in fade-in slide-in-from-bottom-2 duration-700 motion-reduce:animate-none">
      <PageHeader
        index="02"
        eyebrow="Experience"
        title="Projects"
        description="회사별로 진행했던 프로젝트를 소개합니다."
      />

      <div className="mt-14 flex flex-col gap-20">
        {experiences.map((experience, i) => (
          <div key={experience.company}>
            <div className="flex flex-wrap items-end justify-between gap-2 border-b pb-4">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {experience.company}
                </h2>
              </div>
              <span className="text-sm text-muted-foreground tabular-nums">
                {experience.period}
                <span className="mx-2 text-foreground/20">·</span>
                {experience.projects.length} projects
              </span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {experience.projects.map((project) => (
                <Card
                  key={project.title}
                  className="transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:ring-foreground/20"
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="tracking-wide">
                        {project.type}
                      </Badge>
                      {project.client && (
                        <span className="text-xs text-muted-foreground">
                          {project.client}
                        </span>
                      )}
                      <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                        기여도 {project.contribution}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-lg font-semibold tracking-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-5">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {project.responsibilities.map((task) => (
                        <li key={task} className="flex items-start gap-2.5">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-1.5 border-t pt-4">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
