# Projects Hub Specification

This document defines the structure, layout, navigation flow, and UI behavior of the Projects Hub.

It is the source of truth for how the landing page, project pages, and global layout should behave.

---

# 1. Design Philosophy

The Projects Hub is designed as a **minimal, high-focus engineering showcase platform**.

Core principles:

* Space to breathe (high spacing, no clutter)
* Minimal UI noise
* Content-first design
* Strong hierarchy of information
* Smooth but subtle navigation
* No unnecessary animations
* Dark, modern developer aesthetic

The goal is to feel like a **clean engineering documentation system**, not a portfolio template.

---

# 2. Global Layout

## Layout Structure

The entire site follows a consistent structure:

```
Page Content
↓
Footer (always visible)
```

Footer is persistent across all pages.

---

# 3. Landing Page Structure

## Order of Elements

The landing page follows this strict hierarchy:

### 1. Hero Section

* Title: **Projects Hub**
* Short description text:

  * Explains purpose of the hub
  * Mentions curated engineering projects
  * Focus on systems, architecture, and case studies

---

### 2. Projects Section

A grid of project cards.

Each card contains:

* Cover image
* Project title
* Short description
* Two action buttons:

  * Live Project
  * Code (GitHub)

### Projects Included

The following projects are displayed:

* Sentinel → `/projects/sentinel`
* PartFlow → `/projects/partflow`
* PostalET → `/projects/postalet`

Each card opens its corresponding case study page when clicked.

---

### 3. Footer (Landing Page)

The footer appears at the bottom of the landing page and contains:

#### Social Icons (only icons)

* GitHub → https://github.com/LamrotG
* X (Twitter) → https://x.com/Lamrotgt
* Telegram → @Aexti
* Email → mailto:lgutsa16@gmail.com

#### Contact Form

A minimal form with:

* Name input
* Email input
* Message textarea
* Send button

Form behavior:

* Sends email to: **[lgutsa16@gmail.com](mailto:lgutsa16@gmail.com)**
* No external branding
* No unnecessary fields

#### Footer Text

```
© All rights reserved.
```

Minimal and centered.

---

# 4. Project Case Study Page Structure

Each project follows the same layout pattern.

## 4.1 Navigation

Top-left corner:

* Back button:

  * Label: "← Back"
  * Returns to landing page

Top-right or secondary navigation:

* Optional: “Back to all projects” link (same behavior as back button)

Purpose:

* Fast navigation
* No friction between projects

---

## 4.2 Page Structure

### 1. Cover Image

* Full-width or large hero image
* Represents the project visually
* First element after navigation

---

### 2. Case Study Content

Structured sections:

* Overview
* Problem
* Goals / Objectives
* Solution
* Key Features
* Architecture
* Tech Stack
* Engineering Challenges
* Lessons Learned
* Future Improvements

Optional sections when applicable:

* Data Sources (PostalET)
* Entity / Investigation Model (Sentinel)
* Business Modules (PartFlow)

---

### 3. Demo Access (if applicable)

If the project is interactive:

* Login credentials section
* Role-based access explanation
* Suggested evaluation flow

---

### 4. Screenshots

* Ordered list of UI images
* Clear labels per screenshot
* Used for visual understanding of the system

---

### 5. Repository Link

* GitHub link to project
* Always present and clickable

---

### 6. Reflection

Final section:

* What the project demonstrates
* Engineering takeaways
* Product thinking summary

---

# 5. Footer (Global)

Footer appears on:

* Landing page
* Project pages

Contains:

## Social Icons

* GitHub → https://github.com/LamrotG
* X → https://x.com/Lamrotgt
* Telegram → @Aexti
* Email → mailto:lgutsa16@gmail.com

## Contact Form

* Name
* Email
* Message
* Submit button

Sends email to:

```
lgutsa16@gmail.com
```

## Footer Text

```
© All rights reserved.
```

---

# 6. UI / Visual Style

## Theme

* Dark mode only
* Near-black background
* Subtle elevated cards
* Soft borders (low contrast)

## Typography

* Primary font: Space Grotesk
* Code font: JetBrains Mono or Geist Mono

## Spacing

* Generous vertical spacing
* Large section padding
* No dense layouts

## Components Style

* Rounded corners (moderate)
* Soft shadows or none
* Minimal gradients (prefer flat design)
* Buttons are simple and functional

## Motion

* Very subtle transitions only
* No distracting animations
* Fast navigation feedback

---

# 7. UX Principles

* Always prioritize readability
* Never overcrowd sections
* Keep navigation predictable
* Keep case studies scannable
* Make every project feel like documentation, not marketing
* Ensure consistent layout across all projects

---

# 8. Project System Summary

The Projects Hub is structured as:

```
Landing Page
→ Project Cards
→ Project Case Study Pages
→ Global Footer
```

Each project is treated as a **case study document**, not a portfolio item.

The system is designed to scale by simply adding new MDX project files following the same structure.

# 9. Persistent Top Bar (Global Header)

A persistent top bar is fixed at the top of all pages and serves as the primary navigation and quick access layer for the Projects Hub.

---

## Layout Structure

The top bar is split into two sections:

### Left Side
- Project name: **ProjectsHub**
- Acts as a clickable home link (navigates to landing page)

### Right Side
- Search icon (🔍)
- Future expansion space (kept minimal for now)

---

## Behavior

- The top bar is **fixed** and remains visible on all pages.
- It does not scroll with content.
- It remains visually subtle to avoid distracting from content.

---

## Search System

Clicking the search icon opens a global project search interface.

### Search Capabilities

The search system supports filtering projects by:

- Project title
- Description
- Tags
- Tech stack

---

### Example Search Queries

- `nextjs` → returns all Next.js projects
- `supabase` → returns projects using Supabase
- `investigation` → returns Sentinel
- `inventory` → returns PartFlow

---

## Search Behavior

- Search opens in a modal or overlay (preferred over inline search)
- Results update in real time as the user types
- Search is case-insensitive
- Partial matching is supported

---

## Interaction Flow

1. User clicks search icon
2. Search modal opens with input focus
3. User types query
4. Matching projects appear instantly
5. Clicking a result:
   - Navigates to the project case study page
   - Closes the search modal

---

## UX Principles

- Search is fast and lightweight
- UI should not feel like a full application dashboard
- Focus remains on projects, not navigation complexity
- Modal background should be subtle and non-distracting

---

## Visual Style

- Minimal height header
- Dark theme consistent with the rest of the site
- Soft blur or transparency background recommended
- No heavy borders or shadows
- Icons should be simple and monochrome