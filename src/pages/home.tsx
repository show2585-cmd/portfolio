import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import confetti from 'canvas-confetti'
import { Button } from '@/shared/ui/button'
import { siteConfig } from '@/lib/site-config'
import { skillCategories } from '@/features/skills/data'
import { experiences } from '@/features/projects/data'
import { sideProjects } from '@/features/side-projects/data'

const projectCount = experiences.reduce(
  (sum, experience) => sum + experience.projects.length,
  0,
)

export default function Home() {
  const highlightSkills = skillCategories[0].items.slice(0, 4)
  const awardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = awardRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    confetti({
      particleCount: 80,
      spread: 70,
      startVelocity: 35,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    })
  }, [])

  const stats = [
    { value: `${projectCount}+`, label: '실무 프로젝트' },
    { value: `${sideProjects.length}`, label: '사이드 프로젝트' },
    { value: '2회', label: '우수사원상 수상', ref: awardRef },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-24 text-center sm:pt-32 sm:pb-32">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-both motion-reduce:animate-none">
          <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex size-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.availability}
          </span>
        </div>

        <p className="mt-10 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase animate-in fade-in slide-in-from-bottom-3 delay-100 duration-700 fill-mode-both motion-reduce:animate-none">
          {siteConfig.role}
        </p>
        <h1 className="text-gradient mt-4 pb-2 text-6xl font-semibold tracking-tighter sm:text-8xl animate-in fade-in slide-in-from-bottom-4 delay-150 duration-700 fill-mode-both motion-reduce:animate-none">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium tracking-tight sm:text-2xl animate-in fade-in slide-in-from-bottom-3 delay-200 duration-700 fill-mode-both motion-reduce:animate-none">
          {siteConfig.tagline}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-3 delay-300 duration-700 fill-mode-both motion-reduce:animate-none">
          {siteConfig.summary}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-3 delay-500 duration-700 fill-mode-both motion-reduce:animate-none">
          <Button
            render={<Link to="/projects" />}
            size="lg"
            className="h-11 rounded-full px-6"
          >
            프로젝트 보기
            <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" />
          </Button>
          <Button
            render={<Link to="/agents" />}
            variant="outline"
            size="lg"
            className="h-11 rounded-full px-6"
          >
            AI 에이전트 보기
            <ArrowUpRight className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </Button>
        </div>

        <dl className="mt-20 grid w-full max-w-3xl grid-cols-3 divide-x border-y animate-in fade-in delay-700 duration-1000 fill-mode-both motion-reduce:animate-none">
          {stats.map((stat) => (
            <div key={stat.label} ref={stat.ref} className="flex flex-col px-2 py-7">
              <dt className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-first mb-1.5 text-3xl font-semibold tracking-tighter tabular-nums sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {highlightSkills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-foreground/30" aria-hidden="true" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
