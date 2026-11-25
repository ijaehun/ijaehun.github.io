# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **JaeHoon Lee** (@ijaehun), built with Jekyll (no theme, hand-written layout and CSS). Hosted on GitHub Pages at `https://ijaehun.github.io`.

- **Language**: English `/` + Korean `/ko/`. 헤더 EN/KO 버튼으로 전환. 문구 수정은 `_data/i18n.yml` 두 언어 함께.
  Hero(터미널 · 카드) · 논문 · Skills 는 두 언어 공통(영어)
- **Purpose**: Portfolio / Personal site

## Build & Development Commands

No Gemfile (연구실 사이트와 같은 방식). 처음 한 번: `gem install jekyll jekyll-seo-tag jekyll-sitemap`

```bash
# Local development server (http://localhost:4000)
jekyll serve

# Production build check (outputs to _site/, analytics included)
JEKYLL_ENV=production jekyll build
```

## Project Structure

```
.
├── _config.yml             # Site info, analytics id, plugins (seo-tag, sitemap)
├── _data/navigation.yml    # Top menu order (section ids)
├── _data/i18n.yml          # All text per language (en / ko): menu, headings, About, Education, project text
├── _includes/home.html     # Homepage body, shared by both languages (uses page.lang)
├── _pages/index.html       # English page, permalink: / , lang: en
├── _pages/ko.html          # Korean page, permalink: /ko/ , lang: ko
├── _layouts/default.html   # The only layout: head + header + content + footer
├── _includes/
│   ├── head.html           # meta, {% seo %}, favicons, font, CSS, Google Analytics (production only)
│   ├── header.html         # Sticky top menu, ☰ toggle on narrow screens
│   └── footer.html
├── _pages/404.md
├── assets/css/main.scss    # All styles (base + header/footer + sections)
├── assets/js/main.js       # ☰ menu open/close only
└── assets/logo.ico/        # Favicons
```

## Page Sections (_includes/home.html)

모든 페이지 원본은 `_pages/` 에 두고 주소는 각 파일의 permalink 로 정한다 (연구실 사이트와 같은 방식).

```
Hero → About → Education → Publications → Skills → Contact
```

- **Navigation**: Home, About, Education, Publications, Contact
- No Projects section: code links go on the publication line (e.g. TMRC "Code" on the IEEE Access paper)
- Menu links jump with CSS only (`scroll-behavior` + `scroll-padding-top` in main.scss); no scroll JS.
- Header breakpoints: ≥1360px wide spacing, 1024–1359px compact, <1024px ☰ dropdown.

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment (legacy build, Jekyll 3 series; local is Jekyll 4).

## Technical Notes

- **Ruby**: ~3.4.0
- **Analytics**: Google Analytics (G-JRBPF2HM4P), `google_analytics` in `_config.yml`
- 커밋 메시지에 Claude 표시 넣지 않음 (전역 규칙). bash 에서 jekyll 실행 방법은 전역 CLAUDE.md §7

## 지금 상태 · 다음 할 일

자세한 기록은 메모리 `project_status.md` (같은 내용 유지). 마지막 확인 2026-11-25.

- 2026-10-22 개편 끝, 모두 push · 배포 확인
- 2026-11-25 Publications 맨 위에 CF-JEPA (Knowledge-Based Systems, 2027) 추가 · push (fa012e3)
- 테마 없는 직접 만든 사이트, 연구실 사이트와 같은 방식 (`_pages/` + permalink, Gemfile · LICENSE · robots.txt 없음)
- 영어 / + 한국어 /ko/ (EN/KO 버튼, 문구는 _data/i18n.yml, 한국어는 개조식)
- 섹션: Hero · About · Education · Publications(TMRC 는 논문 줄 Code 링크) · Skills(GitHub README 스택과 같음) · Contact(Email · GitHub · ORCID)
- 소개 "Ph.D. Candidate · Time-Series ML Researcher" — 사이트 · GitHub bio · 프로필 README · 저장소 설명 모두 같음
- 개인 저장소 · WDSLab/FEATHer 커밋 기록에서 Claude 공동 작성자 줄 제거 (예전 커밋 번호 바뀜)
- "더 보기": Publications 에 틀만 있고 주석 처리됨
- 다음 할 일: 없음 (논문 · 기술이 늘면 home.html · i18n.yml 갱신)
