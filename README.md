# Auron's corner

A static, draggable scrapbook portfolio for AuronSavant. Serve this directory with any static HTTP server. No build or installation is required. Project content loads from JSON, so use HTTP rather than opening the HTML file directly.

Drag to pan, scroll or pinch to zoom, and use the section navigation to jump around. The project index provides a searchable, keyboard-friendly alternative. Arrow keys pan when the canvas is focused; + and - zoom; Home returns to the introduction.

Project names, descriptions, links, and screenshot paths are in `projects.json`. Personal copy is in `index.html`, and styles are in `style.css`. The three supplied character images are in `assets/`. Typography uses Google Fonts with local font fallbacks.

## Change the wording

Open https://auronsavant.github.io/editor.html. Edit the project names and descriptions in the form, then click **Download projects.json**. Click **Upload to GitHub**, select the downloaded file, and commit it to replace the repository's existing `projects.json`. GitHub Pages republishes automatically. The form keeps a draft in your browser; it does not write to the live site by itself.

Alternatively, edit `projects.json` directly on GitHub or locally. Each project is a named object with `name`, `description`, `group`, `url`, and `screenshot`. Keep the same group to preserve its section. To add a screenshot, place the image in `assets/screenshots/` and set its path in the project object. A blank screenshot shows a text card. The project index uses the same content, so wording only needs to be changed once.

Published Cloudflare projects link directly to their apps. Private projects link to the GitHub profile. Excluded: YouTube3Blue1BrownishVideo, PolyScores, AIBusiness, GermanyGraduatePrograms, GitHub Committer, PatternFinder, Nazeka Chrome, Arcane Expanded, GeoEcon Regression, Imgur Resizer, and API SaaS Maker. Generic GitHub training repositories are omitted.

## GitHub Pages

Publish this directory to `AuronSavant/AuronSavant.github.io`, then enable Pages from the main branch, root directory. The portfolio lives at https://auronsavant.github.io. Publishing these portfolio assets does not publish the private project repositories.
