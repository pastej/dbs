# Repository Guide

## Overview

This repository contains the static portfolio site for **Design by Sarab**. It is built with Jekyll 3.9 and is based on the HTML5 UP **Phantom** theme.

- Production URL: `https://designbysarab.com`
- Primary branch: `master`
- Git remote: `git@github.com:pastej/dbs.git`
- Content types: UX and industrial-design case studies

## Repository Structure

- `index.md`: portfolio landing page.
- `about.md` and `contact.md`: top-level content pages.
- `_projects/`: five UX and industrial-design case studies. Jekyll exposes these through the `projects` collection.
- `_layouts/`: shared page, portfolio, project, About, and Contact templates.
- `_includes/`: shared head, header, footer, and script markup.
- `assets/css/main.scss` and `_sass/`: responsive theme styles and local customizations.
- `assets/images/`: portfolio tiles, project imagery, icons, and the portrait.
- `assets/files/`: downloadable FlyUX PDFs.
- `assets/js/`: Lightbox plus the older jQuery/Skel-based theme scripts.
- `_config.yml`: site metadata, custom domain, analytics, plugins, and collection configuration.
- `CNAME`: custom-domain configuration.

Generated and cached directories such as `_site/` and `.sass-cache/` are ignored and should not be committed.

## Local Development

Install dependencies and serve the site with:

```sh
bundle install
bundle exec jekyll serve
```

Verify a normal build with:

```sh
bundle exec jekyll build
```

Also verify production-only behavior when changing configuration or shared head markup:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

The current development and production builds succeed. Recent Ruby versions may emit non-fatal warnings from Jekyll 3.9.

## Content Conventions

Project files use YAML front matter to define fields such as `layout`, `title`, `category`, `order`, and tile `image`. Standard project pages may also provide an `images` list and `sub_summary`.

The portfolio groups projects by category:

- `ux`: UX Design
- `id`: Industrial Design

Projects are sorted by `order` in descending order. Use root-relative asset paths consistently with the existing content unless deliberately adding proper `baseurl` support across the whole site.

## Known Issues and Improvement Areas

- `index.md` defines `_summary`, but `_layouts/portfolio.html` reads `summary`; consequently, the landing-page summary is not rendered.
- Several templates use root-relative URLs such as `/assets/...`, despite Jekyll having `relative_url` support.
- The frontend dependencies are dated: jQuery, Skel, legacy Font Awesome assets, and Jekyll 3.9.
- `_config.yml` contains a legacy Universal Analytics ID.
- Accessibility needs attention: portfolio tile images have empty alternative text, several Varukorgen images use the generic text `Image`, and FlyUX contains empty image descriptions.
- FlyUX uses obsolete named anchors; prefer element `id` attributes when touching that content.
- The embedded FlyUX Figma prototype has a fixed `800x450` size and may overflow on narrow screens.
- `README.md` currently contains only the repository name.

## Change Guidelines

- Preserve the existing visual identity unless a redesign is explicitly requested.
- Keep portfolio content editable as Markdown/front matter where practical.
- Reuse existing layouts and Sass partials instead of duplicating markup or styles.
- Optimize new images for the web before adding them; the repository already contains substantial image and PDF assets.
- Check desktop and narrow/mobile layouts after template or styling changes.
- Run both development and production Jekyll builds before handing off changes that affect templates, includes, configuration, or dependencies.
