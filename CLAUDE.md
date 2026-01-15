# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **JaeHoon Lee** (@ijaehun), built with Jekyll and Minimal Mistakes theme (v4.24.0). Hosted on GitHub Pages at `https://ijaehun.github.io`.

- **Language**: Korean (ko-KR)
- **Purpose**: Portfolio / Personal site
- **Theme**: Minimal Mistakes with custom styling

## Build & Development Commands

```bash
# Install dependencies (first time setup)
bundle install

# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Production build (outputs to _site/)
bundle exec jekyll build
```

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/navigation.yml # Top navigation menu
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _pages/              # Static pages (404, etc.)
├── _sass/               # Custom SCSS styles
├── assets/              # Images, CSS, JS, fonts
└── index.html           # Homepage (single page portfolio)
```

## Page Sections (index.html)

```
Hero → About → Education → Publications → Skills → Projects → Contact
```

- **Navigation**: About, Education, Publications, Projects, Contact
- **Publications/Projects**: "더 보기" 기능 준비됨 (details/summary, 현재 주석 처리)

## Key Files

- **Homepage**: `index.html` - Single page portfolio with sections
- **Styles**: `assets/css/main.scss` - Main stylesheet
- **Config**: `_config.yml` - Site settings, author info, analytics
- **Custom Head**: `_includes/head/custom.html` - Fonts, favicons

## Configuration

Key settings in `_config.yml`:
- `title`: ijaehun (shown in browser tab)
- `name`: JaeHoon Lee (author name)
- `masthead_title`: ijaehun (header title)

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment.

## Technical Notes

- **Ruby**: ~3.4.0
- **Comments**: Disabled
- **Search**: Disabled
- **Analytics**: Google Analytics (G-JRBPF2HM4P)
