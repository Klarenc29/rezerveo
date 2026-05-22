# syntax=docker/dockerfile:1

# ============================================================
# Rezerveo frontend — multi-stage build
#   1. build : install deps, type-check + Vite build -> /app/dist
#   2. serve : nginx:alpine serving the static SPA (+ /api reverse proxy)
#
# NOTE: build context is the REPO ROOT (see docker-compose.yml) so the image
#       can copy the single source-of-truth nginx config from nginx/default.conf.
# ============================================================

# ---------- 1. build ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first for better layer caching.
COPY frontend/package*.json ./
RUN npm ci

# Copy the rest of the frontend source and build.
COPY frontend/ ./

# Build-time API base URL (relative /api works behind the bundled nginx).
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ---------- 2. serve ----------
FROM nginx:alpine AS serve

# Replace the default site with ours.
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Static assets.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:80/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
