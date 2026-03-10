# ganesh Portfolio

This is a Vite + React + TypeScript portfolio project.

## Run locally

- Install dependencies:
```bash
npm install
```

- Start dev server (open http://localhost:5173):
```bash
npm run dev
```

- Build production bundle:
```bash
npm run build
```

- Preview production build locally:
```bash
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds the app and deploys the `dist` folder to GitHub Pages on pushes to the `main` branch.

What I added:
- `vite.config.ts`: sets a proper `base` when the build runs in GitHub Actions.
- `.github/workflows/pages.yml`: builds and deploys `./dist` to Pages.

Steps to enable deployment:

1. Commit and push the changes to your `main` branch:
```bash
git add -A
git commit -m "Add Pages deploy workflow and README"
git push origin main
```

2. On GitHub, confirm Pages is enabled for the repository (Settings → Pages). The workflow will publish the `gh-pages` site for you.

3. If your default branch is not `main`, update `.github/workflows/pages.yml` to target your branch.

If you want, I can push the changes for you or adjust the workflow to use a different branch or a custom domain.
