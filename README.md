# Jomari Portfolio

Personal portfolio site for Jomari Macaraig — software engineer. Built from scratch as a hands-on way to learn React and Tailwind CSS.

## Tech stack

- **[React 19](https://react.dev/)** — UI, function components only
- **[Vite](https://vite.dev/)** — dev server and build tooling
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling, configured entirely in CSS (`src/index.css`, no `tailwind.config.js`)
- **[lucide-react](https://lucide.dev/)** / **[simple-icons](https://simpleicons.org/)** — outline icons and brand logos, respectively
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)** — deployment

## Sections

The page (`src/App.jsx` → `src/components/layout/Main.jsx`) renders top to bottom as:

| Section | File | Content |
|---|---|---|
| Hero | `sections/Hero.jsx` | Intro, availability status, name, CTAs |
| Skills marquee | `ui/Marquee.jsx` | Auto-scrolling strip of technologies |
| Highlights | `sections/Cards.jsx` | Quick stat tiles (years of experience, etc.) |
| About | `sections/About.jsx` | Background and approach |
| Capabilities | `sections/Capabilities.jsx` | Areas of focus, one card per capability |
| Career / Journey | `sections/Career.jsx` | Work history timeline |
| Projects / Work | `sections/Project.jsx` | Personal projects, linked to GitHub where public |
| Contact | `sections/Contact.jsx` | Direct email link |

Shared building blocks live in `src/components/ui/` (`Card`, `HighlightCard`, `Job`, `Paragraph`, the `Section*` family for the eyebrow/title/wrapper pattern used across every section) and `src/data/site.js` (all site copy/content in one place, imported wherever it's needed).

## Getting started

```bash
npm install
npm run dev
```

The dev server binds to `0.0.0.0` by default, so it's reachable from another device on the same network (useful for testing on a phone) — the terminal output prints both the local and network URLs.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build, output to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy `dist/` to Firebase Hosting |

## Deployment

Hosting is configured in `firebase.json`/`.firebaserc` as a plain static SPA (no framework auto-detection — see those files for why). To ship a new version:

```bash
npm run build
npm run deploy
```

## Project structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Main
│   ├── sections/       # One file per page section
│   └── ui/             # Reusable pieces (Card, Paragraph, Section*, icons, etc.)
├── data/
│   └── site.js         # All site copy and content
├── index.css            # Tailwind import + @theme design tokens + hand-written CSS
└── main.jsx
```
