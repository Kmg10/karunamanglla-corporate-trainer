# Karuna Manglla — Corporate Trainer Site

Standalone website for **Karuna Manglla's corporate Data Science & AI training** practice.

- **Work portfolio (separate site):** https://portfolio-karuna.vercel.app
- **This site (after deploy):** https://karunamanglla-corporate-trainer.vercel.app

## Stack

- [Astro](https://astro.build) 4 + Tailwind CSS 3
- Static export, deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to Vercel

1. Push this folder to a **new GitHub repository** (e.g. `karunamanglla-corporate-trainer`)
2. In Vercel: **Add New Project** → import the repo
3. Framework preset: **Astro** (auto-detected)
4. Deploy — your site will be live at `https://karunamanglla-corporate-trainer.vercel.app`

To use a custom domain, add it in Vercel → Project Settings → Domains.

## Project structure

```
src/
  components/     Page sections (Hero, Stats, Curriculum, …)
  config.ts       External links (portfolio URL)
  layouts/        HTML shell + animations
  pages/index.astro
public/
  assets/         Headshot and media
```

## Customize

- **Portfolio link:** edit `src/config.ts`
- **Contact email:** edit `src/components/Contact.astro`
- **Stats / curriculum copy:** edit the relevant component in `src/components/`
