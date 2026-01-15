# Raul Zanardo — Portfolio & Blog

A modern, responsive website built with React and Vite, featuring a clean design with light/dark theme support.

[View Live Site](https://raulzanardo.github.io)

## Features

- 🎨 Clean, modern UI with light/dark theme
- 📱 Fully responsive design
- ⚡️ Fast performance with Vite
- 🚀 Automated deployment to GitHub Pages
- 🎯 Simple navigation between Home and Blog sections

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

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

The build output will be in the `dist/` directory.

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

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router 6
- **Styling**: Custom CSS with CSS variables for theming
- **Font**: Roboto (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── .github/
│   └── workflows/
│       └── gh-pages.yml    # GitHub Actions deployment
├── src/
│   ├── components/
│   │   └── Header.jsx      # Navigation header with theme toggle
│   ├── pages/
│   │   ├── Home.jsx        # Home page
│   │   └── Blog.jsx        # Blog page
│   ├── App.jsx             # Main app component
│   ├── app.css             # Global styles and theme
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Theme Colors

Edit CSS variables in `src/app.css`:

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

Edit the `posts` array in `src/pages/Blog.jsx` to add new blog entries.

## License

MIT

---

Built with ❤️ using React and Vite
