# Portfolio

A static, single-page portfolio built with Vite, React, TypeScript, and Tailwind CSS v4. Portfolio content is kept in `src/data/` and typed in `src/types/content.ts`.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check the project before publishing:

```sh
npm run lint
npm test
npm run build
```

The production site is generated in `dist/`.

## Edit content

Update the TypeScript files in `src/data/`; keep entries consistent with the interfaces in `src/types/content.ts`.

- `profile.ts`: name, title, tagline, introduction, biography, email, social links, and optional resume URL.
- `skills.ts`: skill groups and tools you have actually used.
- `projects.ts`: project descriptions, tags, and optional repository, demo, details, and image data.
- `education.ts`: education entries and certifications. Every certification must have a status: `"earned"` or `"in-progress"`.
- `site.ts`: section headings, navigation labels, and page title and description.

Components render these values from the data. Do not add personal claims, credentials, metrics, or URLs unless they are accurate. Projects marked `placeholder: true` display a Placeholder badge. Optional links are shown only when a URL is provided.

## Add a project

Add an entry to `src/data/projects.ts` with a unique `id` and the required project details:

```ts
{
  id: "my-project",
  name: "My Project",
  problem: "The problem the project addresses.",
  description: "What the project does and what you contributed.",
  tags: ["Python"],
  repoUrl: "https://github.com/your-account/my-project",
  // demoUrl: "https://example.com",
}
```

Only include `repoUrl`, `demoUrl`, or `detailsUrl` when the corresponding link exists. Set `placeholder: true` if the entry is still a placeholder; remove it once the project details are confirmed. Give each project a distinct `id`.

## Add or replace project images

Place image files in `public/`, for example `public/projects/my-project.webp`, then reference the public URL in the project entry:

```ts
image: {
  src: "/projects/my-project.webp",
  alt: "A concise description of the project screenshot",
},
```

Replace the file and keep the URL if you want to update an existing image, or change `src` to point to a different file. Use meaningful alt text for informative images.

**Note:** `Project.image` is part of the content model, but project cards do not currently render it. Adding or replacing this data alone will not display an image; render `project.image` in the project card in `src/App.tsx` to enable it.

## Add a resume

Copy your resume PDF to `public/resume.pdf`, then set `resumeUrl` in `src/data/profile.ts`:

```ts
resumeUrl: "/resume.pdf",
```

The header only shows the resume link when this value is set. Leave it omitted until the file exists.

## Deploy to Vercel

Import the repository into Vercel and use these project settings:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

No backend or environment variables are required for the static portfolio.
