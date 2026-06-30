# Projects Hub

A minimal, dark-themed showcase for engineering projects and their case studies. Built as a documentation-first platform rather than a traditional portfolio — every project is presented with architecture, technical decisions, and lessons learned.

## Features

- **Landing page** with a project grid pulled automatically from MDX content
- **Project case studies** rendered from MDX, including tech stack, demo access, and screenshots
- **Global search** (`Ctrl/Cmd+K`) across project title, description, category, tech stack, and highlights
- **Contact form** backed by a Next.js API route
- **Custom 404 page** and skeleton loading states
- **Fully responsive** layout across mobile, tablet, and desktop

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) component scaffolding
- [Lucide React](https://lucide.dev/) icons
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for MDX rendering
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing

## Project Structure

```
public/projects/<slug>/<slug>.mdx   # Project content + frontmatter
public/projects/<slug>/cover.png    # Project cover image
src/app/                            # Routes (landing, project pages, API, 404, loading states)
src/components/                     # UI components (cards, top bar, search modal, footer, MDX renderers)
src/lib/                            # Data layer (project discovery, types)
```

Adding a new project requires only a new MDX file (with frontmatter) and a cover image under `public/projects/` — no code changes needed.

## License

Private project. All rights reserved.
