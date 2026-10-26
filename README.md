# NEXARO — Digital Development & Creative Studio

A high-performance, full-stack web application for **NEXARO**, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## ✨ Features & Architecture

- **Full-Stack Inquiries API**: Server-side route handler at `/api/contact` with Zod schema validation, sanitization, rate-safe handling, and structured response IDs (`NX-XXXX`).
- **Apple-Inspired Design System**: Minimalist palette (Midnight Ink, Precision Cobalt, Paper, Soft Gray), responsive radial glow hero orb, floating interactive chips, and glassmorphism.
- **Multilingual Support (i18n)**: 4 full languages supported:
  - English (`EN`)
  - Turkish (`TR`)
  - French (`FR`)
  - Arabic (`عربي`) with full bidirectional RTL (`dir="rtl"`) rendering.
- **Interactive Services Carousel**: Six core services with snap navigation, live progress track indicator, step counter (`01 / 06`), and expandable deliverable scope.
- **Dynamic Pricing Suite & Estimator**:
  - 5 exhaustive categories: Websites & E-commerce, Branding & Identity, Social & Marketing, Web Applications, and Documents.
  - Interactive selection checkboxes allowing visitors to curate their required deliverables and directly pre-fill the inquiry form.
  - Responsive stacked-card mobile layout preventing awkward table horizontal overflow.
- **Selected Work Visuals**: Responsive mockups including browser UI, lifestyle branding boards, and operational metrics dashboard.
- **Founder Profile & Studio Philosophy**: Features Shahd Belhadj (Software Engineering & Cybersecurity credentials, LinkedIn integration, monogram fallback).
- **Interactive FAQ Accordion**: Fluid expand/collapse questions answering project delivery, language, and support questions.
- **Dark & Light Mode**: Seamless color mode toggle with persistent local storage.

---

## 🚀 Running Locally

```bash
# Clone the repository
cd nexaro_website

# Install dependencies (inside nexaro-app)
cd nexaro-app
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

### Option 1: Vercel Dashboard (GitHub / GitLab)
1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/new), import your repository.
3. If deploying from the repository root:
   - Root directory: Select `nexaro-app` (or leave default root, as `vercel.json` and root `package.json` are already configured).
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd nexaro_website/nexaro-app
vercel --prod
```
