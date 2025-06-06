# vandelay-technologies Dockerfile
FROM node:20.17.0-alpine as base
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps --frozen-lockfile

# Development stage
FROM base as development
RUN apk add --no-cache bash

# Build args for development
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_HOSTNAME

# Set environment variables
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_HOSTNAME=$NEXT_PUBLIC_HOSTNAME

COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
# Don't copy source in dev - will be mounted
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build args for production
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_HOSTNAME

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_HOSTNAME=$NEXT_PUBLIC_HOSTNAME

RUN npm run build

# Production stage
FROM base AS production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
