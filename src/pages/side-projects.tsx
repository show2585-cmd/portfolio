import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import { sideProjects } from '@/features/side-projects/data'

export default function SideProjects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Side Projects</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        바이브 코딩/개인 공부용으로 진행한 사이드 프로젝트를 소개합니다.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {sideProjects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover"
              />
            )}
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <CardTitle className="mt-1">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-4"
                >
                  사이트 바로가기 →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
