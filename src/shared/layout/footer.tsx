import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Contact
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              함께 좋은 화면을 만들어요.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-1.5 text-lg font-medium underline decoration-foreground/20 underline-offset-8 transition-colors hover:decoration-foreground"
          >
            {siteConfig.email}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kwh. All rights reserved.</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  )
}
