import { CheckCircle2, AlertTriangle, XCircle, Download } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { agents } from '@/features/agents/data'
import { colorTokens, typographySamples } from '@/features/design/data'

const boundaryGroups = [
  {
    key: 'always' as const,
    label: '항상 수행',
    icon: CheckCircle2,
    className: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'confirm' as const,
    label: '먼저 확인',
    icon: AlertTriangle,
    className: 'text-amber-600 dark:text-amber-400',
  },
  {
    key: 'never' as const,
    label: '절대 금지',
    icon: XCircle,
    className: 'text-red-600 dark:text-red-400',
  },
]

export default function Agents() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">AI Agents</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            React + Vite 프로젝트 개발을 위해 정의해둔 전문 AI 에이전트 페르소나입니다.
            각 에이전트는 역할과 지식, 그리고 지켜야 할 경계선을 갖고 협업합니다.
          </p>
        </div>
        <Button
          render={<a href="/agents.md" download="agents.md" />}
          variant="outline"
        >
          <Download className="size-4" />
          agents.md 다운로드
        </Button>
      </div>

      <div className="mt-10 grid gap-6">
        {agents.map((agent) => (
          <Card key={agent.handle}>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{agent.handle}</Badge>
                <span className="text-xs text-muted-foreground">
                  {agent.name}
                </span>
              </div>
              <CardTitle className="mt-1">{agent.description}</CardTitle>
              <CardDescription>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  {agent.persona.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {agent.knowledge.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {boundaryGroups.map((group) => (
                  <div key={group.key}>
                    <div
                      className={`flex items-center gap-1.5 text-sm font-medium ${group.className}`}
                    >
                      <group.icon className="size-4" />
                      {group.label}
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {agent.boundary[group.key].map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="mt-16 mb-16" />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Design System
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            <a
              href="https://getdesign.md"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              getdesign.md
            </a>{' '}
            포맷을 따라 이 사이트에 실제 적용된 색상·타이포그래피·컴포넌트 규칙을
            정리한 별도의 DESIGN.md입니다. agents.md와는 독립된 문서입니다.
          </p>
        </div>
        <Button
          render={<a href="/design.md" download="design.md" />}
          variant="outline"
        >
          <Download className="size-4" />
          design.md 다운로드
        </Button>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Color Palette & Roles</CardTitle>
          <CardDescription>
            채도 0에 가까운 무채색 팔레트, destructive에만 유채색 허용
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colorTokens.map((token) => (
              <div key={token.variable} className="flex items-center gap-3">
                <div className="flex overflow-hidden rounded-lg ring-1 ring-foreground/10">
                  <span
                    className="size-9"
                    style={{ background: token.light }}
                    title={`Light: ${token.light}`}
                  />
                  <span
                    className="size-9"
                    style={{ background: token.dark }}
                    title={`Dark: ${token.dark}`}
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">
                    {token.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {token.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Typography Rules</CardTitle>
          <CardDescription>
            헤딩과 본문 모두 Geist Variable 한 서체만 사용
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {typographySamples.map((sample) => (
            <div
              key={sample.label}
              className="flex flex-wrap items-baseline gap-3"
            >
              <span className="w-32 shrink-0 text-xs text-muted-foreground">
                {sample.label}
              </span>
              <span className={sample.className}>
                디자인은 문서처럼, 위계는 타이포그래피로
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
