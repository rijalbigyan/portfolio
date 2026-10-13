# Build with GitHub Copilot in VS Code

## One-time setup
1. Install Node.js 22 LTS (https://nodejs.org), VS Code, and Git. Check with `node -v` (needs 20.19+ or 22.12+).
2. In VS Code, sign in to GitHub and make sure the GitHub Copilot and Copilot Chat extensions are enabled.
3. Create an empty folder named `portfolio`, open it in VS Code (File > Open Folder), and run `git init` in the terminal.
4. Copy this starter's files into it, keeping the structure: `.github/copilot-instructions.md`, `CLAUDE.md` (optional), and everything under `src/`.
   Copilot automatically reads `.github/copilot-instructions.md` as project rules.

## Run it
Open Copilot Chat, switch the mode dropdown to **Agent**, and paste prompt 1. Review and approve each terminal command it proposes. Do not continue until the previous step works (`npm run dev` shows the page).

### Prompt 1 (scaffold, tokens, header, hero)
Read .github/copilot-instructions.md and the files in src/types, src/data and src/styles. They are my content model and design tokens; keep them as the source of truth. This folder already has my starter files, so scaffold Vite + React + TypeScript here without overwriting them (for example scaffold in a temp folder and move the config files in). Install Tailwind CSS v4 with @tailwindcss/vite, motion, lucide-react, and @fontsource-variable packages for Space Grotesk, Inter and JetBrains Mono. Wire up the tokens in src/styles/index.css, then build the sticky header (with keyboard-accessible mobile menu and a resume link that only shows when profile.resumeUrl is set) and the hero. Run `npm run lint` and `npm run build`, fix errors without suppressing them, and tell me what you did. Stop there.

### Prompt 2 (remaining sections)
Build About, Skills, Projects, Education (with Earned vs In progress certifications), and Contact sections, rendering only from src/data. Project cards must show a visible "Placeholder" badge when `placeholder` is true and render repo/demo links only when URLs exist. Contact is mailto, GitHub and LinkedIn links only, no form. Then add the footer with a dynamic year and back-to-top link. Run lint and build and fix issues.

### Prompt 3 (polish and checks)
Add page metadata (title, description, favicon, Open Graph), restrained motion that respects prefers-reduced-motion, and a visible focus style audit. Check there is no horizontal scroll at 320px. Add Vitest tests that verify data validity (no empty links, every certification has a status) and keyboard operation of the mobile menu. Run lint, tests and build, then summarize any remaining issues.

### Prompt 4 (docs and deploy)
Write a README that explains how to run the project, edit content in src/data, add a project, replace images, add public/resume.pdf and set resumeUrl, and deploy to Vercel (build command `npm run build`, output directory `dist`).

## Deploy
Push to a GitHub repo, then import it at vercel.com (free tier). Do not commit private documents; your resume PDF is intentionally public.
