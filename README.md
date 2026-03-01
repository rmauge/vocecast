# Vocecast

Automated voice reminders for your business. Built with the [T3 Stack](https://create.t3.gg/).

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router, Server Components, Turbopack
- [Better Auth](https://www.better-auth.com/) — Authentication (Auth0 OAuth + email/password)
- [tRPC 11](https://trpc.io) — End-to-end typesafe API
- [Prisma](https://prisma.io) — Database ORM (PostgreSQL)
- [Tailwind CSS v4](https://tailwindcss.com) — Styling
- [Inngest](https://inngest.com) — Background job queue
- [TanStack Form](https://tanstack.com/form) — Form state management

## Authentication

Authentication is handled by [Better Auth](https://www.better-auth.com/) with Auth0 as the OAuth provider.

### How it works

```
Request flow:

Browser ──► /api/auth/* ──► Next.js catch-all route ──► Better Auth handler ──► endpoint
                              [src/app/api/auth/        [toNextJsHandler()]    [pattern-matched
                               [...all]/route.ts]                                by sub-path]
```

1. **Catch-all route** — `src/app/api/auth/[...all]/route.ts` captures every request under `/api/auth/*` and delegates to Better Auth's handler via `toNextJsHandler(auth.handler)`.

2. **Endpoint registration** — `betterAuth()` in `src/server/better-auth/config.ts` automatically registers all auth endpoints. Core endpoints (sign-in, sign-up, session, sign-out, etc.) are built in. Plugin endpoints (OAuth callbacks, cookie management) are merged in from each plugin's `.endpoints` object.

3. **Request dispatch** — When a request arrives, Better Auth's internal router strips the `basePath` (`/api/auth`), matches the remaining path against registered endpoints, runs middleware (origin checks, rate limiting, plugin middleware), and dispatches to the matched handler.

### Registered endpoints

These are automatically registered based on the config and plugins:

| Endpoint | Source | Purpose |
| --- | --- | --- |
| `/api/auth/sign-in/email` | Core (emailAndPassword) | Email/password sign-in |
| `/api/auth/sign-up/email` | Core (emailAndPassword) | Email/password sign-up |
| `/api/auth/sign-out` | Core | Sign out, clear session |
| `/api/auth/get-session` | Core | Fetch current session |
| `/api/auth/oauth2/callback/auth0` | genericOAuth plugin | Auth0 OAuth callback |
| `/api/auth/set-cookie` | nextCookies plugin | Cookie management for Server Components |

### Key files

| File | Purpose |
| --- | --- |
| `src/server/better-auth/config.ts` | Auth configuration (providers, plugins, user fields) |
| `src/server/better-auth/server.ts` | `getSession()` — request-deduplicated session accessor for Server Components |
| `src/server/better-auth/client.ts` | Client-side auth hooks |
| `src/app/api/auth/[...all]/route.ts` | Catch-all route handler |

### Session access

In Server Components, use the `getSession()` helper:

```ts
import { getSession } from "~/server/better-auth/server";

const session = await getSession();
// session.user.role, session.user.orgId, etc.
```

This is wrapped in React's `cache()` so multiple components calling `getSession()` in the same request only resolve the session once.

### Custom user fields

The user model is extended with two server-managed fields (not settable from client sign-up):

- **`role`** — Maps to `UserRole` enum (`ADMIN`, `POWER_USER`, `USER`). Defaults to `USER`.
- **`orgId`** — Organization ID for multi-tenant scoping. `null` until onboarding is completed.

### Route protection

- **Middleware** (`src/middleware.ts`) — Redirects unauthenticated users away from `/dashboard` by checking for the session cookie. Lets `/api/auth/*` pass through unconditionally.
- **tRPC** — `orgProtectedProcedure` and `roleProtectedProcedure()` enforce auth + org membership on API routes.
- **Dashboard layout** (`src/app/dashboard/layout.tsx`) — Server-side redirect to `/login` or `/onboarding` based on session state.

## Getting Started

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions, available scripts, and code conventions.
