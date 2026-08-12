import { siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Kwh. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
