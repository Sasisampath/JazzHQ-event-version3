# ── Stage 1: deps ──────────────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: builder ───────────────────────────────────────────────────
FROM node:20-alpine AS builder

ARG NEXT_PUBLIC_PRM_API_URL
ARG NEXT_PUBLIC_USE_LISTING_MOCKS
ARG NEXT_PUBLIC_SITE_URL

ENV NEXT_PUBLIC_PRM_API_URL=$NEXT_PUBLIC_PRM_API_URL
ENV NEXT_PUBLIC_USE_LISTING_MOCKS=$NEXT_PUBLIC_USE_LISTING_MOCKS
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── Stage 3: runner (minimal) ──────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
