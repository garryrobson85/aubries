# Aubries Handyman & Maintenance Website

A clean Next.js rebuild for Aubries Handyman & Maintenance, using the finished rustic logo set, local work imagery, local-business SEO metadata, FAQ schema, service schema, animations, subtle button feedback and user-triggered logo sound.

## GitHub Pages

This repository is set up to deploy the actual website through GitHub Actions.

1. Upload or push these files to the `aubries` repository.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch and wait for the deploy workflow to finish.

Your site should then load at `https://garryrobson85.github.io/aubries/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Deployment

This project is ready for GitHub Pages, Vercel or any standard Next.js host. The site assets are local under `public/aubries`.
