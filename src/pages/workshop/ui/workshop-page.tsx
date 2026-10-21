import { useEffect, useState } from 'react'

import { ThemeToggle } from '@/features/theme-toggle'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

export function WorkshopPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col gap-6 px-4 py-10">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-h)]">Component workshop</h1>
          <p className="text-sm text-[var(--text)]">
            shadcn-style Button and Dialog with light/dark themes. See Storybook for variants.
          </p>
        </div>
        <ThemeToggle
          onToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          theme={theme}
        />
      </header>
      <section className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Workshop dialog</DialogTitle>
              <DialogDescription>
                Radix focus trap and keyboard escape match shadcn patterns.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  )
}
