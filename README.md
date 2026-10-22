# ijaehun.github.io

Personal portfolio website built with Jekyll.

## Live Site

[https://ijaehun.github.io](https://ijaehun.github.io)

## Tech Stack

- **Framework**: Jekyll
- **Hosting**: GitHub Pages
- **Language**: English

## Local Development

Install Ruby, then `gem install jekyll jekyll-seo-tag jekyll-sitemap`.

```bash
# Run local server (http://localhost:4000)
jekyll serve

# Build (outputs to _site/)
jekyll build
```

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/               # Navigation and site data
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _pages/              # All pages (/, /ko/, 404) with permalinks
└── assets/              # Images, CSS, JS
```

## Deployment

Push to `main` branch automatically triggers GitHub Pages deployment.

