# WILTY Charts

A data visualization dashboard for *Would I Lie to You?*, exploring patterns across episodes, rounds, guesses, guests, and the David Mitchell vs Lee Mack rivalry.

**Live site:** https://joeldohmkaratjas.github.io/WILTY/

## What it shows

The app is organized into five sections:

- **David vs Lee** — win rates, score difference, margins, clean sheets, Liar of the Week, and captain heatmaps.
- **Formats & panel** — accuracy by round type, format mix over seasons, “This Is My?” success, truth/lie share, panel consensus, and team overrides.
- **Guests** — guest-focused performance and appearance charts.
- **Lie detection** — how well players and teams spot truths and lies.
- **Bob** — Bob Mortimer-specific fool-rate and round breakdowns.

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Mantine](https://mantine.dev/) UI and charts
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting

## Getting started

This project uses [Bun](https://bun.sh/).

```bash
bun install
bun run dev
```

`bun run dev` regenerates chart data before starting the Vite dev server.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Generate chart data and start the Vite dev server |
| `bun run build` | Type-check, generate chart data, and build for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run Oxlint with type-aware checks and auto-fixes |
| `bun run generate:charts` | Regenerate `src/generated/chartData.ts` from episode data |

## Data pipeline

Episode data lives in `data/season_<n>/<season>_<episode>.ts` and follows the types in `data/episodeTypes.ts`.

The chart build pipeline:

1. `scripts/generate-chart-data.ts` discovers season episode files.
2. `scripts/normalize.ts` converts raw episode/round data into flat chart-friendly records.
3. `scripts/aggregate.ts` computes the aggregates used by the UI.
4. The result is written to `src/generated/chartData.ts`.

`src/generated/chartData.ts` is generated; update source data/scripts and rerun `bun run generate:charts` rather than editing it by hand.

## Deployment

The site is deployed to GitHub Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

- **Triggers:** pushes to `master`, or manual workflow dispatch.
- **Build:** installs dependencies with Bun and runs `bun run build`.
- **Publish:** uploads `dist/` and deploys with GitHub Pages Actions.

Vite is configured with `base: '/WILTY/'` in [`vite.config.ts`](vite.config.ts) for GitHub Pages project-site hosting.

## Project structure

```text
data/                    # Typed episode source data by season
scripts/                 # Data normalization/aggregation/chart generation
src/
  components/            # UI sections and chart components
  generated/             # Generated chart data
  hooks/                 # App hooks
  chartTypes.ts          # Chart data types
  sections.ts            # Dashboard section registry
public/                  # Static assets
```

## Development notes

- Chart data is regenerated on `dev` and `build`; run `bun run generate:charts` after changing files in `data/` or `scripts/`.
- The dashboard reads from generated aggregates in `src/generated/chartData.ts`, not directly from raw episode files at runtime.
- For GitHub Pages, keep the Vite `base` path aligned with the repository name/path.
