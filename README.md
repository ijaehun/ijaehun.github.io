# ijaehun.github.io

Personal portfolio website built with Jekyll and Minimal Mistakes theme.

## Live Site

[https://ijaehun.github.io](https://ijaehun.github.io)

## Tech Stack

- **Framework**: Jekyll
- **Theme**: Minimal Mistakes v4.24.0
- **Hosting**: GitHub Pages
- **Language**: Korean (ko-KR)

## Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

The local server runs at `http://localhost:4000`

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/               # Navigation and site data
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _pages/              # Static pages
├── _posts/              # Blog posts (by category)
├── _sass/               # Custom styles
├── assets/              # Images, CSS, JS
└── index.html           # Homepage
```

## Deployment

Push to `main` branch automatically triggers GitHub Pages deployment.

## License

MIT
