# Hack the Plains

Event site. Astro, static, no client JavaScript.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run check    # lists unwritten copy, TBDs, and empty links
```

## Editing content

All text lives in `src/data/`:

| File | Page |
| --- | --- |
| `event.yaml` | Dates, venue, registration, hosts, contact |
| `schedule.yaml` | Schedule |
| `faq.yaml` | FAQ |
| `sponsors.yaml` | Sponsor logos on the home page (hidden while empty) |
| `sponsorship.yaml` | `/sponsor` |

Text starting with `COPY:` shows on the site with a dashed outline until replaced.

To open registration, set `registration.status: open` and `registration.url` in `event.yaml`.

## Theme

Colors are in `src/styles/theme.css`. Keep the contrast notes in that file true.

## Images

All from the designer. Put them in `public/` and reference them by path.

| Asset | Where | Size |
| --- | --- | --- |
| Hero art | `event.yaml` `hero_art` | 1600px wide |
| Favicon | `public/favicon.svg`, uncomment in `Layout.astro` | SVG |
| Social image | `public/og.png`, uncomment in `Layout.astro` | 1200x630 |
| Host and partner logos | `public/logos/`, set `logo` in `event.yaml` | SVG, 40px tall on screen |
| Sponsor logos | `public/logos/sponsors/` | SVG, 56px tall on screen |

## Deploy

Pushing to `main` deploys to GitHub Pages at https://hacktheplains.org.

Link to files in `public/` through `url()` from `src/lib/url.ts`.
