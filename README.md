# Chethan K S — Portfolio

Animated personal portfolio with a dark "RPG level-up system" theme.
React + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Everything (bio, skills, projects, achievements, contact) lives in `src/data.js`.
The contact form opens the visitor's mail app addressed to `CONTACT.email`.

Photos live in `public/images/`.

## Deploy to Vercel

Push this folder to a GitHub repo, then import it on vercel.com — it auto-detects Vite
(build command `npm run build`, output `dist`). Or run `npx vercel` from this folder.
