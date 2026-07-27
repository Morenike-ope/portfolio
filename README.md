# Living City Atlas

Morenike Atejioye's static portfolio site. The homepage uses a CSS-rendered
atlas backdrop and animated featured-project signals; the Projects chapter uses
one accessible project list. The site has no mapping-library or backend
dependency and remains compatible with GitHub Pages at `/portfolio/`.

## Editing projects

Project content is centralized in the `projects` array near the top of
`app.js`. Each record supplies the project-list card and field-note drawer.

The homepage feature field uses these additional properties:

- `featured`: include the project on the homepage.
- `featuredOrder`: control its position in the feature field.
- `featuredLabel`: identify the project's practice area.
- `featuredStat`: show one concise, supported project detail.
- `featuredAccent`: select the established `teal` or `amber` accent.
- `featuredDelay` and `featuredDuration`: stagger the restrained signal
  animation. Reduced-motion visitors receive a static treatment.

To add a project, create one complete record in `projects`. No second list of
project titles is required: `renderFeaturedProjects()` and
`renderProjectLists()` build both interfaces from that shared source.

## Local preview

Serve this directory with any static web server, then open `index.html` through
the server. Keep links and assets relative so the same files work locally and
under the GitHub Pages repository path.
