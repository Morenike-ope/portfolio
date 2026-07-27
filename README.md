# Living City Atlas

## Editing atlas markers

Marker settings live with each project in the `projects` array near the top of
`app.js`:

- `markerCategory` selects the shared legend/marker treatment. Supported values
  are `planning`, `research`, and `presentation`.
- `markerTooltip` supplies the short label revealed on hover, keyboard focus, or
  touch.
- `showOnMap` controls map visibility without removing the project from the
  project list or case study.

Legend entries are generated from visible project records. A category appears
only when at least one visible project uses it, so `Presentations` should be
assigned only to a verified presentation record.
