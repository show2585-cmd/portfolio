import { Moon, Sun } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { useThemeStore } from '@/hooks/use-theme-store'

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="테마 전환"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  )
}
