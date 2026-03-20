# Tanishka Trivedi — Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployable on Vercel in minutes.

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, fonts, utility classes
│   ├── layout.tsx         # Root layout with metadata & SEO
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero with animated particle canvas
│   ├── About.tsx          # About me with stat cards
│   ├── Projects.tsx       # Project cards with tech tags
│   ├── Skills.tsx         # Grouped skill badges
│   ├── Achievements.tsx   # Achievement highlight cards
│   ├── Education.tsx      # Education timeline + coursework
│   ├── Contact.tsx        # Contact form + links
│   └── Footer.tsx         # Minimal footer with social links
├── lib/
│   └── data.ts            # ✅ All portfolio content lives here
├── public/
│   └── resume.pdf         # ⚠️ Add your resume PDF here
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

---

## ⚡ Quick Start (Local)

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume PDF

Place your resume file at:
```
public/resume.pdf
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — done!

---

## 🚀 Deploy to Vercel

### Option A — Via Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# From the project root:
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: tanishka-portfolio
# - Directory: ./
# - Override settings? No

# For production deployment:
vercel --prod
```

### Option B — Via GitHub (recommended for auto-deploys)

1. Push the project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**

3. Import your GitHub repository

4. Vercel auto-detects Next.js — click **Deploy**

5. Your site is live at `https://your-project.vercel.app` 🎉

### Option C — Via Vercel Dashboard (drag & drop)

1. Run `npm run build` locally
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the entire project folder

---

## ✏️ Customization

### Update content

All portfolio data is in **one file**:
```
lib/data.ts
```

Edit `portfolioData` to update:
- Personal info, links
- Projects (add new ones easily)
- Skills categories
- Achievements
- Education

### Add a new project

In `lib/data.ts`, add to the `projects` array:
```ts
{
  title: "My New Project",
  period: "Jan 2026 – Feb 2026",
  description: "Short description...",
  longDescription: "Longer description with more detail...",
  tech: ["React", "TypeScript", "Firebase"],
  highlights: ["Feature 1", "Feature 2"],
  github: "https://github.com/tanishkatrivedi/project",
  color: "teal",   // "green" | "teal"
  icon: "🚀",
}
```

### Update LinkedIn/GitHub links

In `lib/data.ts`, update the `personal` object:
```ts
personal: {
  linkedin: "https://linkedin.com/in/YOUR_HANDLE",
  github: "https://github.com/YOUR_USERNAME",
  ...
}
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Card BG | `#111118` |
| Border | `#252535` |
| Accent Green | `#4ade80` |
| Accent Teal | `#2dd4bf` |
| Accent Amber | `#fbbf24` |
| Font Display | Syne |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono |

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + CSS animations
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📋 Sections

1. **Hero** — Name, title, animated particle canvas, CTAs
2. **About** — Summary, stats, highlight cards
3. **Projects** — Card-based, tech tags, GitHub links
4. **Skills** — Categorized badge groups
5. **Achievements** — Featured card + grid
6. **Education** — 3-column cards + coursework
7. **Contact** — Form + social links
8. **Footer** — Clean minimal footer

---

Built by Tanishka Trivedi · IIT Jodhpur
