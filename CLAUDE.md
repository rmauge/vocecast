# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vocecast is a multi-tenant SaaS for automated client follow-up reminders via voice calls (using cloned voices) and SMS. Built with the T3 Stack.

## Commands

```bash
pnpm dev              # Start dev server (Turbopack)
pnpm build            # Production build
pnpm check            # Run lint + typecheck together
pnpm lint             # ESLint only
pnpm lint:fix         # ESLint with auto-fix
pnpm typecheck        # TypeScript type checking only
pnpm format:check     # Prettier check
pnpm format:write     # Prettier fix
pnpm db:push          # Push Prisma schema to database (dev)
pnpm db:generate      # Create and apply a migration
pnpm db:migrate       # Deploy pending migrations
pnpm db:studio        # Open Prisma Studio
```

No test framework is configured.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **API**: tRPC 11 with `httpBatchStreamLink` and SuperJSON
- **ORM**: Prisma (PostgreSQL)
- **Auth**: Better Auth with Auth0 OAuth
- **UI**: Shadcn/ui, Tailwind CSS v4
- **Forms**: TanStack Form with Standard Schema (no zodValidator adapter)
- **Jobs**: Inngest for background task orchestration
- **Storage**: S3-compatible (AWS S3 in prod, MinIO locally via docker-compose)

## Architecture

### Path Alias

`~/*` maps to `./src/*` (configured in tsconfig.json).

### Service Layer

The core abstraction pattern — interfaces define contracts, implementations are swappable per provider:

- **Interfaces**: `src/server/services/interfaces/` — `IVoiceProviderService`, `ICallProviderService`, `IStorageProviderService`, etc.
- **Implementations**: `src/server/services/implementations/{prisma,elevenlabs,twilio,plivo,aws}/`
- **Factory**: `src/server/services/factory.ts` — creates service instances, supports BYOK (org-specific API keys via `ProviderApiKey` model)
  - `createOrgServiceFactory(orgId)` looks up org-specific keys before falling back to env defaults
  - `createCallProviderWithFailover()` provides Twilio → Plivo failover

### tRPC

- **Setup**: `src/server/api/trpc.ts` — defines context, procedures, middleware
- **Routers**: `src/server/api/routers/` — merged in `src/server/api/root.ts`
- **Client (browser)**: `src/trpc/react.tsx` — React provider with QueryClient
- **Client (RSC)**: `src/trpc/server.ts` — server-side caller with React cache
- **Router key**: Use `clients` (not `client` — collides with tRPC built-in)

### Auth & Procedures

- Config: `src/server/better-auth/config.ts` (Auth0 OAuth, email/password, custom fields: role, orgId)
- Session helper: `src/server/better-auth/server.ts` (React cache-wrapped)
- Client hooks: `src/server/better-auth/client.ts`
- Middleware: `src/middleware.ts` — redirects unauthenticated users, checks org membership

**tRPC procedure hierarchy:**
- `publicProcedure` — no auth required
- `protectedProcedure` — requires authenticated session
- `orgProtectedProcedure` — requires session + orgId (multi-tenant scoping)
- `roleProtectedProcedure(role)` — requires session + minimum role level

### Multi-Tenancy

All domain queries are scoped by `orgId`. Use `orgProtectedProcedure` for any data-access router. The `orgId` comes from the user's session.

### Shared Schemas

`src/shared/schemas/` — Zod schemas shared between tRPC inputs and TanStack Form validation.
- `zodFormValidator()` in `form-validator.ts` bridges Zod → TanStack Form's Standard Schema interface
- Shared constants in `src/shared/constants/index.ts` (routes, API paths)

### Inngest (Background Jobs)

- Client: `src/server/inngest/client.ts` (app id: "vocecast")
- Events: `src/server/inngest/events.ts`
- Functions: `src/server/inngest/functions/` — step-based orchestration (e.g., `execute-reminder` loads reminder → resolves template → generates TTS audio → makes call → updates status)

### Database

- Schema: `prisma/schema.prisma`
- String IDs (cuid) everywhere, matching Better Auth convention
- Enums: `UserRole` (ADMIN, POWER_USER, USER), `CloneProvider`, `CallStatus`, `TransactionStatus`, `ReminderOffset`
- `TransactionOutbox` model for distributed consistency

### API Routes

`src/app/api/` — auth (Better Auth catch-all), trpc, inngest webhook, plivo answer webhook, upload (voice samples)

## Key Conventions

- **Package manager**: pnpm exclusively
- **Node version**: 20 LTS (use `nvm use`)
- **Env validation**: `src/env.js` via `@t3-oss/env-nextjs` — add new env vars here
- **Local services**: `docker-compose up` for MinIO (S3-compatible storage, port 9000)
- **Agent docs**: `docs/agent/` — ARCHITECTURE.md, FEATURES.md, OVERVIEW.md, USERS.MD for domain context
- **ElevenLabs SDK v2.36**: Voice creation uses `client.voices.ivc.create()` (not `.add()`); TTS uses `client.textToSpeech.stream()` returning `ReadableStream<Uint8Array>`