# Morenike Atejioye — Living City Atlas

A static, accessible portfolio for an urban planner, applied researcher, and data analyst. The site uses an interactive MapLibre map, editorial project case studies, city-arrival portals, a project-linked Data Practice section, and the established dark atlas visual system.

Live site: <https://morenike-ope.github.io/morenike-living-atlas/>

## Architecture

- `index.html` contains the semantic page structure, dialogs, navigation, and relative asset references.
- `styles.css` contains the cinematic atlas design, responsive layouts, focus states, and reduced-motion rules.
- `app.js` is the central content and interaction source. The map and project-list views both render from the same `projects` records.
- `assets/` contains local public files, including the résumé.
- `.github/workflows/pages.yml` deploys the repository root to GitHub Pages after every push to `main`.

There is no build step, backend, or framework. Any local static server can run the site:

```powershell
python -m http.server 4176
```

Then open `http://127.0.0.1:4176/`.

## Editing project content

Project content is centralized near the top of `app.js`.

- Edit a preview: update `short`, `role`, `methods`, or `evidence`.
- Add case-study content: add an object to a project’s `caseStudy` array with a `title` and either `body`, `items`, `links`, or a supported `visualization`.
- Update a statistic: edit `stat`, `statLabel`, `evidence`, or the verified values inside the relevant case-study section.
- Add or replace a chart: keep its data in `app.js`, add a renderer alongside `renderFutureLabScenarios`, and reference it with a `visualization` key.
- Add a document: place it in `assets/`, use a relative URL such as `./assets/report.pdf`, and add it to a case-study `links` array.
- Change a location: edit `ATLAS_LOCATIONS`, then update the project’s `destination` or `locationKeys`.
- Add a project: create one project record, add its case-study enrichment, and add its ID to the relevant city-arrival `projectIds` array.
- Associate a Data Practice method: add a `DATA_PRACTICE` record whose `projectId` matches the project.

If information is incomplete, use the exact source placeholder `TODO: Morenike to provide`. The public renderers filter these values so they remain visible to maintainers but not visitors.

## Verified-data notes

- Future Lab reports 700 total responses. The four supplied scenario counts total 691, so the chart explicitly labels them as reported scenario selections and does not invent a category for the difference.
- Plan Quality evaluates the written plans; it does not claim implementation outcomes.
- Employment Access and Housing is labeled research in progress, and spatial mismatch is treated as a framework to test.
- Project markers use approximate city-level coordinates unless a more precise verified location is available.

## Accessibility and responsive behavior

The site supports keyboard, mouse, and touch input; visible focus states; Escape and backdrop closing for dialogs; focus return; accessible chart tables; full-width mobile drawers; mobile project-view switching; and `prefers-reduced-motion`.

When adding media, include descriptive alt text, verify licensing, optimize local copies, and record attribution. Do not use unsupported statistics or decorative charts with invented values.

## Deployment

GitHub Pages is deployed by `.github/workflows/pages.yml`. Keep all project assets relative (`./assets/...`) so the site works from the repository subpath. Pushes to `main` trigger the existing `Deploy Living City Atlas` workflow.

If the live site is stale:

1. Check the Actions tab for the latest workflow run.
2. Confirm Pages uses **GitHub Actions** as its source.
3. Hard-refresh after the deployment completes; CSS and JavaScript query versions in `index.html` help invalidate old caches.
