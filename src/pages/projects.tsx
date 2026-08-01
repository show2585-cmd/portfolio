import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { experiences } from '@/features/projects/data'

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        회사별로 진행했던 프로젝트를 소개합니다.
      </p>

      <div className="mt-10 flex flex-col gap-14">
        {experiences.map((experience) => (
          <div key={experience.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                {experience.company}
              </h2>
              <span className="text-sm text-muted-foreground">
                {experience.period}
              </span>
            </div>
            <Separator className="mt-3 mb-6" />

            <div className="grid gap-6 sm:grid-cols-2">
              {experience.projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{project.type}</Badge>
                      {project.client && (
                        <span className="text-xs text-muted-foreground">
                          {project.client}
                        </span>
                      )}
                      <span className="ml-auto text-xs text-muted-foreground">
                        기여도 {project.contribution}
                      </span>
                    </div>
                    <CardTitle className="mt-1">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                      {project.responsibilities.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
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
