# Portfolio project guide (Copilot custom instructions)

Static single-page personal portfolio: CS graduate student, aspiring cybersecurity professional (software dev, offensive security, Linux, automation).

## Stack
Vite, React, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `@theme`, no tailwind.config), `motion` (import from `motion/react`), `lucide-react`, self-hosted `@fontsource-variable` fonts. No router, backend, database, auth or state library. Keep dependencies minimal.

## Rules
- All content lives in `src/data/*.ts`, typed by `src/types/content.ts`. Components render from data only; never hard-code content in JSX.
- Never fabricate experience, certifications, metrics, proficiency percentages or URLs. Unknown values are `placeholder: true` or omitted; links render only when a URL exists.
- Resume button renders only when `profile.resumeUrl` is set. Do not add a contact form unless a real submission service is chosen.
- No secrets, personal documents or API keys in the repo.
- Never suppress TypeScript or lint errors to pass the build. Avoid `any`.

## Design
Dark, developer-tool feel. Tokens are in `src/styles/index.css`. Headings Space Grotesk, body Inter, JetBrains Mono for small technical accents only. Restraint: one memorable element (the hero visual), quiet everything else. No neon glow, no fake terminal commands, no entrance animation on every section, no identical-card sprawl. Use motion for user-triggered feedback and at most one page-load moment. Honor `prefers-reduced-motion`.

## Accessibility
Semantic landmarks, skip link, visible `:focus-visible`, keyboard-operable mobile menu (Escape closes, focus returns), `aria-current` on active nav link, alt text on meaningful images, no horizontal overflow at 320px.

## Phases (stop for feedback after 2, 4, 6)
1. Inspect environment, confirm plan.
2. Scaffold, tokens, fonts, layout, header, hero.
3. About, Skills, Projects, Education, Contact from data.
4. Project cards, certifications (Earned vs In progress), resume handling.
5. Interactions, motion, metadata (title, description, favicon, Open Graph).
6. Dev server, lint, typecheck, tests (data validity, nav keyboard behavior), production build; fix defects.
7. README: run, edit content, add projects, replace images, update resume, deploy to Vercel (build `npm run build`, output `dist`).

## Scripts required
`dev`, `build` (tsc -b && vite build), `lint`, `test`.
