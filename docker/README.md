# Docker setup overview

This directory documents how the containerized stack fits together. The actual
build files live next to each service so their build context stays minimal.

## Pieces

| File | Purpose |
| --- | --- |
| `../docker-compose.yml` | Orchestrates `backend` + `frontend` on one bridge network. |
| `../backend/Dockerfile` | Multi-stage: install deps → `tsc` build → slim non-root runtime. |
| `../frontend/Dockerfile` | Multi-stage: `tsc -b && vite build` → nginx serving `dist/`. |
| `../nginx/default.conf` | SPA fallback, gzip, caching, security headers, `/api` reverse proxy. |

## Ports & network

- Frontend (nginx) published on host **:3000** → container :80
- Backend (Express) published on host **:5000** → container :5000
- Both join the **external** `rezerveo` Docker network (shared with other stacks).

## How requests flow

```
browser ──▶ :3000 (rezerveo-landing-web / nginx)
               ├─ /            → static SPA (index.html, /assets/*)
               └─ /api/*       → proxy_pass http://rezerveo-landing-api:5000/api/*
```

Because nginx proxies `/api`, the frontend only ever calls **relative** URLs.
No CORS is needed in production and no API URL is baked into the bundle.

## Common commands

```bash
# Create the shared network once (if it does not already exist)
docker network create rezerveo

# Build + run the whole stack
docker compose up --build

# Rebuild a single service
docker compose build rezerveo-landing-api
docker compose up -d rezerveo-landing-api

# Tail logs
docker compose logs -f rezerveo-landing-api

# Stop and remove
docker compose down
```

## Before first run

Create `backend/.env` from `backend/.env.example`. The default points at the
`mail_dev` container (`SMTP_HOST=mail_dev`, port `1025`, no auth) which lives on
the shared `rezerveo` network — captured mail appears in the maildev web UI.
For real delivery, set `SMTP_*` to your provider. If SMTP is unset the booking
endpoint returns a clean `503` and the server still boots/healthchecks.
