# High Tech — Landing Page

A multilingual landing page for **High Tech**, a global software engineering agency based in Almaty, Kazakhstan. Built with React, Vite, and deployed on Vercel with a Neon (serverless PostgreSQL) backend.

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, shadcn/ui, Framer Motion, i18next (EN / RU / KK)
- **API:** Vercel Edge Function (`api/contact.ts`)
- **Database:** Neon (serverless PostgreSQL) via Drizzle ORM
- **Language:** TypeScript (full-stack)

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [Vercel CLI](https://vercel.com/docs/cli): `npm i -g vercel`
- A [Neon](https://neon.tech) account (free tier is sufficient)

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd high-tech-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Neon database

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the connection string from the Neon dashboard

### 4. Configure environment

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>.neon.tech/<dbname>?sslmode=require
```

### 5. Initialize the database schema

```bash
npm run db:push
```

### 6. Start the development server

```bash
npm run dev
```

This uses the Vercel CLI to simulate the production environment locally (frontend + Edge Function). The app will be available at [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

### Option A: Vercel Dashboard (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add the `DATABASE_URL` environment variable in **Project Settings → Environment Variables**
4. Deploy — Vercel detects the config from `vercel.json` automatically

### Option B: Vercel CLI

```bash
vercel --prod
```

Set the environment variable:

```bash
vercel env add DATABASE_URL
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server via Vercel CLI |
| `npm run build` | Build the client for production |
| `npm run check` | TypeScript type-check |
| `npm run db:push` | Sync Drizzle schema to Neon database |

## Project Structure

```
├── api/
│   └── contact.ts      # Vercel Edge Function — handles contact form submissions
├── client/             # React SPA (Vite)
│   └── src/
│       ├── components/ # Page sections (Navbar, Hero, Services, Portfolio, Contact, Footer)
│       ├── pages/      # Route pages
│       └── i18n.ts     # Translations (EN, RU, KK)
├── shared/             # Shared schema and API route definitions
├── vercel.json         # Vercel build configuration
└── drizzle.config.ts   # Drizzle ORM configuration
```

## Features

- Responsive single-page layout: Hero, Services, Portfolio, Contact
- Contact form stored in Neon PostgreSQL via a serverless Edge Function
- Multilingual support (English, Russian, Kazakh) with automatic browser language detection
- Smooth animations via Framer Motion
