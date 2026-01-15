# Raul Zanardo — Portfolio & Blog

A modern, responsive website built with React Router 7, featuring a clean design with light/dark theme support.

[View Live Site](https://raulzanardo.github.io)

## Features

- Clean, modern UI with light/dark theme
- Fully responsive design
- Fast performance with Vite and React Router 7
- Automated deployment to GitHub Pages
- File-based routing system
- TypeScript support

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `build/client/` directory.

## Deployment

This site automatically deploys to GitHub Pages via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions workflow builds the site
3. Deploys to `gh-pages` branch
4. Site is live at `https://raulzanardo.github.io`

### GitHub Pages Configuration

Ensure your repository settings have:

- **Settings → Pages → Source**: Deploy from a branch
- **Branch**: `gh-pages` / `root`

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router 7 (file-based routing)
- **Styling**: Tailwind CSS 4
- **TypeScript**: Type-safe development
- **Font**: Roboto (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── .github/
│   └── workflows/
│       └── gh-pages.yml         # GitHub Actions deployment
├── app/
│   ├── components/
│   │   └── Header.tsx           # Navigation header with theme toggle
│   ├── data/
│   │   └── blogPosts.ts         # Blog posts data
│   ├── routes/
│   │   ├── home.tsx             # Home page route
│   │   ├── blog.tsx             # Blog listing route
│   │   └── blog/$slug.tsx       # Individual blog post route
│   ├── types/
│   │   └── context.ts           # TypeScript type definitions
│   ├── app.css                  # Global styles and theme
│   └── root.tsx                 # Root layout with theme management
├── public/
│   └── favicon.ico              # Site favicon
├── build/client/                # Production build output
├── react-router.config.ts       # React Router configuration
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependencies and scripts
```

## Customization

### Theme Colors

Edit CSS variables in `app/app.css`:

```css
:root {
  --color-primary: #ff9800; /* Orange accent */
  --color-primary-dark: #bb86fc; /* Purple accent (dark mode) */
  --color-background: #ffffff; /* Light background */
  --color-background-dark: #121212; /* Dark background */
  /* ... more variables */
}
```

### Adding Blog Posts

Edit the `blogPosts` array in `app/data/blogPosts.ts` to add new blog entries. Each post follows the `BlogPost` interface with fields for title, content, images, and metadata.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## License

MIT

---

Built using React and Vite
