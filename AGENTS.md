# AGENTS.md

## Project Vision

This repository is a dedicated showcase for software projects and detailed engineering case studies. It is **not** a traditional portfolio website. The focus is on the work itself—architecture, implementation, technical decisions, and lessons learned.

Every project should feel like a polished product page or engineering write-up rather than a marketing page.

---

## Design Principles

* Prioritize readability over decoration.
* Keep layouts spacious and uncluttered.
* Use consistent spacing and typography.
* Avoid unnecessary animations.
* Every interaction should have a purpose.
* Maintain a professional developer aesthetic.

---

## Theme

* Dark mode only.
* Minimal color palette.
* Subtle borders and shadows.
* Rounded corners.
* No gradients unless they add clear value.
* Motion should be subtle and purposeful.

---

## Typography

Primary font:

* Space Grotesk

Monospace:

* JetBrains Mono or Geist Mono

Typography should create a clean engineering-focused reading experience.

---

## Technology

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React
* MDX for project case studies
* Vercel deployment

---

## Content Architecture

Each project should exist as its own MDX document.

Recommended structure:

* Hero
* Overview
* Problem
* Solution
* Features
* Screenshots
* Architecture
* Tech Stack
* Challenges
* Lessons Learned
* Future Improvements

Projects should never be hardcoded into page components. The application should automatically discover and render project content.

---

## Component Philosophy

Components should be:

* Small
* Reusable
* Accessible
* Typed
* Easy to maintain

Avoid duplicate UI implementations.

---

## Code Style

* Prefer server components when possible.
* Keep client components minimal.
* Avoid unnecessary state.
* Keep functions short and focused.
* Use descriptive names.
* Maintain strict TypeScript typing.
* Follow consistent import ordering.

---

## Styling Rules

Prefer utility classes over custom CSS.

Avoid arbitrary values unless necessary.

Maintain a consistent spacing system.

Cards, buttons, badges, and sections should share the same visual language.

---

## Animations

Animations should enhance usability, not distract.

Use:

* fade
* slight translate
* opacity
* scale (subtle)

Avoid:

* excessive motion
* bouncing
* spinning
* parallax
* flashy entrance effects

---

## Accessibility

Maintain semantic HTML.

Use keyboard-accessible interactions.

Provide alt text for images.

Maintain sufficient color contrast.

---

## Performance

Optimize images.

Lazy-load heavy content.

Avoid unnecessary JavaScript.

Keep Lighthouse scores high.

---

## Scalability

The architecture should support adding new projects by creating a new MDX file and associated assets without modifying existing pages.

Adding a project should require minimal changes.

---

## Goal

Build a project hub that feels like high-quality engineering documentation rather than a traditional portfolio, with an emphasis on clarity, maintainability, and long-term scalability.
