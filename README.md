# Rezerveo — Booking Platform Landing Site

A modern, premium SaaS marketing site for **Rezerveo** — the all-in-one booking
platform for service businesses.

> **Appointments, managed. Revenue, protected.**

Full-stack, fully typed (TypeScript end-to-end), and production-ready with Docker.

- **Frontend** — React 19 + Vite + TailwindCSS + React Router + Framer Motion + Lucide
- **Backend** — Express + Nodemailer (handles the demo/booking form → email)
- **Infra** — Multi-stage Docker builds, nginx (SPA + `/api` reverse proxy), docker-compose

---

## Features

- Responsive, mobile-first, accessible UI with a premium dark/light aesthetic
- Dark mode by default (system-aware) with a persistent toggle, no flash on load
- Sticky blur navbar, smooth scrolling, animated-on-scroll sections, page transitions
- Sections: Hero · Stats · Business types · Features · How it works · Deployment ·
  Pricing · Testimonials · FAQ · Final CTA · Contact
- Booking/demo form available both as a **modal** (from any CTA) and an inline
  **Contact** section, sharing one component
- Form validation, loading states, toast notifications, rate limiting, honeypot spam
  protection, and proper error handling
- SEO: meta + Open Graph + Twitter tags, JSON-LD, favicon, web manifest, robots.txt
- Reusable architecture: typed UI primitives (Button, Card, Section, Modal, Toast,
  Skeleton, inputs…), contexts, hooks, and a single content source of truth
- Floating CTA on mobile, subtle animated background, loading skeletons

---

## Project structure

```
rezerveo/
├── docker-compose.yml          # backend + frontend(nginx) on the external "rezerveo" network
├── .env.example                # compose-level vars (ports)
├── shared/config/              # brand tokens + shared option lists (source of truth)
├── nginx/default.conf          # SPA fallback, gzip, caching, security headers, /api proxy
├── docker/README.md            # how the docker pieces fit together
├── backend/                    # Express + Nodemailer API (TypeScript)
│   ├── Dockerfile  tsconfig.json  .env.example
│   └── src/{server,app,config,routes,controllers,services,templates,middleware,utils,types}
└── frontend/                   # React 19 + Vite SPA (TypeScript)
    ├── Dockerfile  tailwind.config.ts  vite.config.ts  tsconfig*.json
    ├── public/                 # favicon, og-image, manifest, robots, fonts/
    └── src/{components,sections,pages,context,hooks,lib,data,types,router}
```

---

## Quick start — Docker (recommended)

The stack joins a pre-existing **external** Docker network named `rezerveo` and
publishes the frontend on **:3000** and the API on **:5000**.

```bash
# 1. Create the shared network once (skip if it already exists)
docker network create rezerveo

# 2. Configure the backend (SMTP, mail addressing, rate limits)
cp backend/.env.example backend/.env
#   The default points at the maildev container (mail_dev:1025, no auth).

# 3. (optional) override host ports
cp .env.example .env

# 4. Build & run
docker compose up --build
```

Then open **http://localhost:3000**. The API is at **http://localhost:5000/api**
and is also proxied through the frontend at `/api`.

> Container names are `rezerveo-landing-web` / `rezerveo-landing-api` to avoid
> colliding with any existing `rezerveo-*` containers on your server.

---

## Quick start — local dev (no Docker)

Run the two services in separate terminals. The Vite dev server proxies `/api`
to the backend automatically.

```bash
# Terminal 1 — backend
cd backend
cp .env.example .env        # set SMTP_* (or point at a local maildev/Mailtrap)
npm install
npm run dev                 # http://localhost:5000

# Terminal 2 — frontend
cd frontend
npm install
npm run dev                 # http://localhost:5173
```

---

## Environment variables

### `backend/.env`

| Variable | Description | Default |
| --- | --- | --- |
| `NODE_ENV` | `development` / `production` | `development` |
| `PORT` | API port | `5000` |
| `CORS_ORIGIN` | Comma-separated allowed origins | dev origins |
| `SMTP_HOST` | SMTP server host (only required field for mail) | `mail_dev` |
| `SMTP_PORT` | SMTP port | `1025` |
| `SMTP_SECURE` | `true` for port 465, else `false` | `false` |
| `SMTP_USER` / `SMTP_PASS` | SMTP credentials (optional — blank for maildev) | _empty_ |
| `MAIL_FROM` | From header | `Rezerveo Website <no-reply@rezerveo.al>` |
| `MAIL_TO` | Where booking requests are delivered | `info@rezerveo.al` |
| `RATE_LIMIT_WINDOW_MINUTES` / `RATE_LIMIT_MAX` | Anti-spam rate limit | `15` / `5` |

> If SMTP is not configured the server still boots and stays healthy; the booking
> endpoint returns a clean `503`.

### `frontend/.env`

| Variable | Description | Default |
| --- | --- | --- |
| `VITE_API_URL` | API base used by the client | `/api` |

### root `.env` (compose)

| Variable | Description | Default |
| --- | --- | --- |
| `FRONTEND_PORT` | Host port for the site | `3000` |
| `BACKEND_PORT` | Host port for the API | `5000` |

---

## Brand fonts

The site uses **Typo Round** (display) + **Montserrat ExtraLight** (body):

- **Montserrat** loads from Google Fonts automatically.
- **Typo Round** is a licensed font. Drop the file into
  `frontend/public/fonts/` — the `@font-face` in `src/index.css` already points
  at it. Without it, headings fall back to **Quicksand** (a rounded Google font),
  so the site looks great out of the box. See `frontend/public/fonts/README.md`.

---

## Testing the booking form

The form sends an email to `MAIL_TO` (`info@rezerveo.al`). For testing without a
real mailbox, use the **maildev** container (default), [Mailtrap](https://mailtrap.io),
or [Ethereal](https://ethereal.email). Submit the form and check the inbox.

Built-in protections: client + server validation, per-IP rate limiting (`429` on
abuse), and a hidden honeypot field (silently drops bots).

---

## Useful commands

```bash
# Frontend
cd frontend
npm run dev          # dev server
npm run build        # tsc -b && vite build  (type-clean production build)
npm run preview      # preview the production build

# Backend
cd backend
npm run dev          # tsx watch (hot reload)
npm run build        # tsc -> dist/
npm start            # run compiled server
npm run typecheck    # tsc --noEmit
```

---

## Health check

```bash
curl http://localhost:5000/api/health
# { "success": true, "message": "ok", "data": { "smtp": true, "uptime": 12.3 } }
```
