# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal blog using the Minimal Mistakes theme (v4.24.0), hosted on GitHub Pages at `https://ijaehun.github.io`. The site is in Korean (ko-KR) and features custom styling, JavaScript enhancements, and Utterances comments.

## Build & Development Commands

```bash
# Install dependencies (first time setup)
bundle install

# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Production build (outputs to _site/)
bundle exec jekyll build

# Preview with file watching (uses Rake)
rake preview
```

## Content Structure

### Creating Posts

Posts go in `_posts/[Category]/YYYY-MM-DD-slug.md` with this frontmatter:

```yaml
---
title: "Post Title"
search: false
categories:
  - Dev  # Options: Dev, Study, Notes, Archive
tags:
  - [tag1, tag2]
toc: true
toc_sticky: true
date: YYYY-MM-DD
last_modified_at: YYYY-MM-DD
---
```

### Category Mapping

| Category | Directory | Purpose |
|----------|-----------|---------|
| Study | `_posts/Study/` | Learning records |
| Dev | `_posts/Dev/` | Development projects |
| Notes | `_posts/Notes/` | Memos and tips |
| Archive | `_posts/Archive/` | Portfolio items |

## Architecture

### Key Customization Locations

- **Custom CSS**: `assets/css/custom.css` - notice boxes, animations, code highlighting
- **Custom JS**: `assets/js/custom.js` - hover effects, scroll animations, dark mode toggle
- **Custom Head**: `_includes/head/custom.html` - fonts, favicons, CSS fixes
- **Sidebar Navigation**: `_includes/nav_list_main` - category list with post counts
- **Homepage**: `index.html` - hero section, category grid, recent posts

### Theme Overrides

To customize the Minimal Mistakes theme, copy files from the remote theme into local directories:
- Layouts → `_layouts/`
- Includes → `_includes/`
- Sass → `_sass/minimal-mistakes/`

### Configuration Files

- `_config.yml` - Site settings, plugins, defaults
- `_data/navigation.yml` - Top navigation menu items
- `Gemfile` - Ruby dependencies

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment. No manual build step required.

## Technical Notes

- **Ruby**: ~3.4.0 (includes compatibility gems: base64, csv, ostruct)
- **Search**: Lunr.js full-text search
- **Comments**: Utterances (GitHub Issues-backed)
- **Analytics**: Google Analytics enabled
