# The Living City Atlas — Morenike Atejioye

An immersive geographic portfolio for an urban planner and public-sector researcher. It preserves Morenike’s cinematic Living City Atlas design while adding a real, navigable map, the West Des Moines project destination, and Future Lab as a featured Omaha project. The site uses semantic HTML, modern CSS, vanilla JavaScript, and MapLibre GL JS and is designed for GitHub Pages at `/morenike-living-atlas/`.

## Interactive map

- **Renderer:** MapLibre GL JS 5.12.0
- **Basemap:** OpenFreeMap dark vector style, using OpenStreetMap data
- **Credentials:** No API key, browser token, or account is required
- **Usage:** OpenFreeMap currently states that its public instance has no map-view or request limits. It is a free service without an availability SLA, so the portfolio includes a dark non-map fallback and a graceful error state.
- **Attribution:** MapLibre displays the required OpenFreeMap, OpenMapTiles, and OpenStreetMap attribution.

All project content, cities, and coordinates are centralized at the beginning of `app.js`. City-center markers are explicitly labeled approximate when the repository does not contain a precise project site.

## Edit the portfolio

- **Projects, field notes, and coordinates:** edit the `projects` array and `ATLAS_LOCATIONS` object at the top of `app.js`.
- **Inclusivity WDSM and Future Lab placeholders:** search `app.js` for `TODO: Morenike to provide`.
- **About and contact:** edit the About section in `index.html`.
- **Contact links:** replace the TODO spans in `index.html` with real `<a>` elements when URLs are available.
- **Colors and layout:** edit the custom properties and component rules in `styles.css`.

All local asset references are relative so the site works locally and from the GitHub Pages project path.

## Local preview

From the parent folder:

```powershell
python -m http.server 4176
```

Open `http://localhost:4176/morenike-living-atlas/`.

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
