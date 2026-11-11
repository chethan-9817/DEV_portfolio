# Chethan K S — Portfolio

**Live:** https://personalblog-iota-orcin.vercel.app

My personal portfolio. I'm a 2nd-year B.E. student in Computer Science & Data Science at
St Joseph Engineering College (SJEC), Mangaluru, and a member of the Aero Club and Sceptix Club.

The site has a clean white, flight-manual look with a "level-up" twist. Fighter jets, RC planes
and drones fly across the page, a nod to my RC aviation work and the 2nd place at VIT Aerodominator.

## What's on it

- **Hero:** a system notification types out: *"[ SYSTEM ] A new player has appeared: CHETHAN K S"*
- **About:** a player status card (Level 02 = 2nd year) with my bio
- **Skills:** XP bars that fill on scroll, ranked E → S
- **Major projects:** Pineapple, PharmaFlow, StudentSync, ArriveShare, with GitHub links
- **Achievements:** a quest log with "Quest cleared" pop-ups
  - Srinathon 3.0 (national-level hackathon): runners-up, ₹15,000, with Pineapple, plus photos
  - VIT Aerodominator: 2nd place, with a live airspace of jets, planes and drones
  - PBL Sem 1, 2nd prize: Smart Waste Management & Routing (ESP32 + MQTT)
  - PBL Sem 2, 3rd prize: Self-Healing Battery (research project)
- **Clubs & interests:** Aero Club, Sceptix Club, anime, aviation
- **Contact:** GitHub, LinkedIn, email, and a message form

All aircraft are original SVG drawings.

## Tech

Vite · React · Tailwind CSS · Framer Motion · deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build` (output goes to `dist/`).

## Editing content

| What | Where |
| --- | --- |
| Bio, skills, projects, achievements, clubs, contact | `src/data.js` |
| Photos | `public/images/` |
| Colours and fonts | `tailwind.config.js`, `src/index.css` |
| Flying aircraft | `src/components/Sky.jsx`, `src/components/Aircraft.jsx` |

The contact form has no backend. It opens the visitor's email app addressed to `CONTACT.email` in `src/data.js`.

## Deploying

The site is hosted on Vercel, which detects Vite automatically (build: `npm run build`, output: `dist`).
To publish changes by hand from this folder:

```bash
npx vercel deploy --prod
```

## Contact

- GitHub: [chethan-9817](https://github.com/chethan-9817)
- LinkedIn: [Chethan K S](https://www.linkedin.com/in/chethan-ks-618515398/)
- Email: chethanksks4@gmail.com
