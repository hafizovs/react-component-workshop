import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

describe('Dialog', () => {
  it('opens from trigger and exposes an accessible title', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open settings</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>Adjust workshop preferences.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open settings' }))
    expect(screen.getByRole('dialog', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByText('Adjust workshop preferences.')).toBeInTheDocument()
  })
})
