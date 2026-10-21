# 12 Component workshop

**Live:** https://hafizovs.github.io/react-component-workshop/

Storybook 8 catalog for shadcn-style primitives with Vitest accessibility checks.

## Stack

- Vite app on port **5012**
- Storybook 8 (`@storybook/react-vite`) on port **60012**
- Radix Dialog, CVA buttons, Tailwind light/dark


## How to run

```bash
# from portfolio_react/
pnpm install
pnpm dev
```

Open **http://localhost:5012**

See also [docs/RUNBOOK.md](../docs/RUNBOOK.md).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Vite demo app |
| `pnpm storybook` | Component stories |
| `pnpm check` | Typecheck, Vitest, oxlint |

## Manual check

1. `pnpm storybook` — switch toolbar theme and inspect Button stories.
2. `pnpm dev` — toggle theme and open the sample dialog.
