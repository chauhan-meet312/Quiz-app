**Live Demo**

🔗 [https://quiz-app-olive-ten-94.vercel.app/](https://quiz-app-olive-ten-94.vercel.app/)

**Quiz-app**

A small Next.js + TypeScript quiz application used for a coding assignment. This repository contains the UI components, custom quiz layout, and basic client-side quiz logic.

**Setup Instructions**

- **Node**: Install Node.js 18+ (recommended).
- **Install dependencies**: `npm install`
- **Run development server**: `npm run dev` (starts Next.js in dev mode)
- **Build for production**: `npm run build`
- **Run in production**: `npm start` or `npm run start` (after `npm run build`)
- **Notes**: On Windows, use PowerShell (`pwsh.exe`) or Terminal that supports the commands above.

**Tech Stack Used**

- **Framework**: `Next.js` (App Router)
- **Language**: `TypeScript`
- **Styling**: global CSS + PostCSS (see `postcss.config.mjs` and `app/globals.css`)
- **UI**: Small component library under `components/ui` and `components/custom`
- **Bundler/Platform**: Next.js (built-in)

**Key Features Implemented**

- **Quiz UI**: Question rendering, selectable answers, and radio-group inputs (`components/ui/radio-group.tsx`).
- **Progress tracking**: Visual progress bar component (`components/custom/ProgressBar.tsx` and `components/ui/progress.tsx`).
- **Question navigation**: Forward/back navigation and quick jump (`components/custom/QuestionNavigation.tsx`).
- **Quiz container**: Reusable layout/box for quiz content (`components/custom/QuizBox.tsx`).
- **Completion view**: `components/QuizCompletion.tsx` shows final results or next steps.

**Assumptions Made**

- Questions are stored client-side or passed as props; there is no persistent backend included.
- App expects a modern browser and Node.js 18+ for local development.
- Accessibility basics are implemented through semantic inputs, but full a11y/audit was not conducted.
- Environment variables: none required for local development.

**Time Spent on the Assignment**

- **Time**: [replace with actual time spent] (example: ~2–4 hours)

**How to Contribute**

- Fork the repo and create a feature branch.
- Run `npm install` and `npm run dev` to test changes locally.
- Open a pull request describing your changes.

If you'd like, I can update the README to include screenshots, deployment steps (Vercel), or fill in the exact time spent — tell me which and I'll update it.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
