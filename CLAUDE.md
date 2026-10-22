# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **JaeHoon Lee** (@ijaehun), built with Jekyll (no theme, hand-written layout and CSS). Hosted on GitHub Pages at `https://ijaehun.github.io`.

- **Language**: Korean (ko-KR)
- **Purpose**: Portfolio / Personal site

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
├── _config.yml             # Site info, analytics id, plugins (seo-tag, sitemap)
├── _data/navigation.yml    # Top menu
├── _layouts/default.html   # The only layout: head + header + content + footer
├── _includes/
│   ├── head.html           # meta, {% seo %}, favicons, font, CSS, Google Analytics (production only)
│   ├── header.html         # Sticky top menu, ☰ toggle on narrow screens
│   └── footer.html
├── _pages/404.md
├── assets/css/main.scss    # All styles (base + header/footer + sections)
├── assets/js/main.js       # ☰ menu open/close only
├── assets/logo.ico/        # Favicons
└── index.html              # Homepage (single page portfolio)
```

## Page Sections (index.html)

```
Hero → About → Education → Publications → Skills → Projects → Contact
```

- **Navigation**: Home, About, Education, Publications, Projects, Contact
- Menu links jump with CSS only (`scroll-behavior` + `scroll-padding-top` in main.scss); no scroll JS.
- Header breakpoints: ≥1200px wide spacing, 900–1199px compact, <900px ☰ dropdown.

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment (legacy build, Jekyll 3 series; local is Jekyll 4).

## Technical Notes

- **Ruby**: ~3.4.0
- **Analytics**: Google Analytics (G-JRBPF2HM4P), `google_analytics` in `_config.yml`
- Bash 의 `bundle` 은 WindowsApps 가짜를 잡을 때가 있음 → `/c/Ruby34-x64/bin/ruby.exe /c/Ruby34-x64/bin/bundle exec ...`

## 지금 상태 · 다음 할 일

자세한 기록은 메모리 `project_status.md` (같은 내용 유지). 마지막 확인 2026-10-22.

- 사이트 운영 중 (GitHub Pages, 마지막 커밋 2026-01-16 "update nav bar")
- 파일 정리 끝 (안 쓰는 파일 · 테마 복사본 삭제, sitemap 플러그인, CLAUDE.md 비공개) — 커밋 안 함
- Minimal Mistakes 테마 제거, 직접 만든 layout · header · footer · CSS 로 교체 — 커밋 안 함.
  개발 모드에서 전후 치수 비교(본문 172개 요소 중 About 높이 5px 외 같음) · 실제 클릭 확인.
  운영 모드 빌드에서 애널리틱스 · sitemap · canonical 주소 확인
- "더 보기": Publications · Projects 에 틀만 있고 주석 처리됨
- 다음 할 일: 커밋 · push. Contact 의 예시 이메일 · LinkedIn 주소 고치기
