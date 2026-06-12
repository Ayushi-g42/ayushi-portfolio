# Ayushi Gothi — Frontend Portfolio

> Modern, responsive portfolio website built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

[ayushigothi.dev](https://ayushigothi.dev) ← Update after deploying

## ✨ Features

- **Next.js 13** App Router with SSG for maximum SEO
- **TypeScript** throughout — type-safe data layer
- **Tailwind CSS** — design system tokens and utilities
- **Framer Motion** — scroll reveals, stagger animations, spring physics
- **Dark / Light mode** — via next-themes, dark default
- **Sticky Navbar** — active section highlighting via IntersectionObserver
- **Scroll progress bar** — spring-animated at top of viewport
- **Mobile-first** responsive design
- **Accessibility** — focus styles, aria labels, reduced-motion support
- **SEO** — metadata API, JSON-LD structured data, OG image

## 🏗️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Framework   | Next.js 13 (App Router) |
| Language    | TypeScript              |
| Styling     | Tailwind CSS v3         |
| Animations  | Framer Motion           |
| Icons       | Lucide React            |
| Dark Mode   | next-themes             |
| Deployment  | Vercel                  |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Home page (all sections)
│   └── globals.css      # Design tokens + base styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Experience, Projects, TechStack, Achievements, Contact
│   ├── ui/              # ScrollReveal, SectionHeading, Badge, ScrollProgress
│   └── providers/       # ThemeProvider
├── data/
│   ├── resume.ts        # All personal data (typed)
│   ├── projects.ts      # Project details
│   └── navigation.ts    # Nav links
├── hooks/               # Custom React hooks
└── lib/
    └── utils.ts         # cn() utility
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
open http://localhost:3000
```

## 🚢 Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# For production
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done!

### Option 3: One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Customization

All personal data lives in `src/data/`:

- **`resume.ts`** — Update `personal`, `experiences`, `skillCategories`, `techStack`, `achievements`
- **`projects.ts`** — Add or update your projects
- **`navigation.ts`** — Modify nav links

To add your resume PDF:
```
public/resume.pdf  ← Place your PDF here
```

To update the color palette, edit `tailwind.config.ts` → `colors.accent`.

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

Built with ❤️ by [Ayushi Gothi](https://www.linkedin.com/in/ayushi-gothi-a739a91a2)
