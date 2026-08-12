import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { Button } from '@/shared/ui/button'
import { Badge } from '@/shared/ui/badge'
import { siteConfig } from '@/lib/site-config'
import { skillCategories } from '@/features/skills/data'

export default function Home() {
  const highlightSkills = skillCategories[0].items.slice(0, 4)
  const awardBadgeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = awardBadgeRef.current
    if (!el) return

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

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
      <Badge variant="secondary">{siteConfig.role}</Badge>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        {siteConfig.tagline}
      </p>
      <p className="max-w-2xl text-muted-foreground">{siteConfig.summary}</p>
      <Badge
        ref={awardBadgeRef}
        variant="outline"
        className="h-auto py-2 text-sm"
      >
        🏆 우수사원상 2회 수상
      </Badge>
      <div className="flex flex-wrap justify-center gap-2">
        {highlightSkills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Button render={<Link to="/projects" />}>프로젝트 보기</Button>
        <Button render={<Link to="/agents" />} variant="outline">
          AI 에이전트 보기
        </Button>
      </div>
    </section>
  )
}
