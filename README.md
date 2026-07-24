# The Living City Atlas — Morenike Atejioye

An immersive static portfolio for an urban planner and public-sector researcher. Its visual foundation restores Morenike’s original Living City Atlas design while adding the Ames research destination. The site uses semantic HTML, modern CSS, and vanilla JavaScript and is designed for GitHub Pages at `/morenike-living-atlas/`.

## Edit the portfolio

- **Projects and field notes:** edit the `PROJECTS` array at the top of `app.js`.
- **Ames placeholders:** search `app.js` for `TODO: Morenike to provide`.
- **About and contact:** edit the About and Contact sections in `index.html`.
- **Contact links:** replace the TODO spans in `index.html` with real `<a>` elements when URLs are available.
- **Background image:** replace `assets/city-atlas-background.png` while keeping the filename, or update its relative path in `styles.css`.
- **Colors and layout:** edit the custom properties and component rules in `styles.css`.

All asset references are relative so the site works locally and from the GitHub Pages project path.

## Local preview

From the repository folder:

```powershell
python -m http.server 4176
```

Open `http://localhost:4176/`.

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
