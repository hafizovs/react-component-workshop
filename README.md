## Live demo

https://hafizovs.github.io/react-component-workshop/

# Component workshop

## About

Storybook catalog for shadcn-style primitives, with Vitest accessibility checks. Storybook 8 runs on port 60012 and the Vite demo on port 5012. The demo toggles theme and opens a sample dialog; the stories cover the buttons and the toolbar theme.

## Capabilities

- Vite demo on port **5012**
- Storybook 8 on port **60012**
- Button stories and a theme toolbar
- Theme toggle and sample dialog in the demo app
- Vitest accessibility checks

## Functionality

- Run Storybook, switch the toolbar theme, and inspect Button stories
- Run the Vite demo, toggle the theme, and open the sample dialog

Storybook catalog for shadcn-style primitives with Vitest accessibility checks — Vite + Storybook 8.

## Scripts

```bash
pnpm install
pnpm dev          # http://localhost:5012
pnpm storybook    # http://localhost:60012
pnpm check
pnpm build
```

## Manual demo

1. `pnpm storybook` — switch toolbar theme and inspect Button stories.
2. `pnpm dev` — toggle theme and open the sample dialog.
