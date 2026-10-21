import { Button } from '@/shared/ui/button'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button aria-label="Toggle theme" onClick={onToggle} variant="outline">
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </Button>
  )
}
