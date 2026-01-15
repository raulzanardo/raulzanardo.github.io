# React blog (Vite) — repo scaffold

This repository now contains a minimal React + Vite scaffold and a GitHub Actions workflow that builds and deploys the site to GitHub Pages (the `gh-pages` branch) on pushes to `main`.

Local usage

- Install dependencies:

```bash
npm install
```

- Run dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

Deployment (GitHub Actions)

- The workflow `.github/workflows/gh-pages.yml` builds and deploys the `dist` folder to the `gh-pages` branch using `peaceiris/actions-gh-pages`.
- Ensure GitHub Pages is configured to serve from the `gh-pages` branch (or use user/org root page if applicable).

Notes

- This scaffold uses Vite and React Router for routing. Add posts/components under `src/` and style as you like.
