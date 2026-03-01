# Contributing to Vocecast

## Prerequisites

- **Node.js** >= 20.14.10 (LTS) — use [nvm](https://github.com/nvm-sh/nvm) to manage versions
- **pnpm** 10.x — declared via `packageManager` in `package.json`
- **PostgreSQL** — local instance or connection string in `.env`
- **Docker** (optional) — for running Postgres locally

## Getting Started

```bash
# Switch to the correct Node version
nvm use

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
# Fill in the required values in .env

# Set up the database
pnpm db:push

# Start the dev server
pnpm dev
```

## Available Scripts

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `pnpm dev`           | Start dev server with Turbopack        |
| `pnpm build`         | Production build                       |
| `pnpm start`         | Start production server                |
| `pnpm check`         | Run lint + typecheck                   |
| `pnpm lint`          | ESLint                                 |
| `pnpm lint:fix`      | ESLint with auto-fix                   |
| `pnpm typecheck`     | TypeScript type checking               |
| `pnpm format:check`  | Check formatting with Prettier         |
| `pnpm format:write`  | Fix formatting with Prettier           |
| `pnpm db:push`       | Push Prisma schema to database         |
| `pnpm db:generate`   | Create and apply a migration           |
| `pnpm db:migrate`    | Deploy pending migrations              |
| `pnpm db:studio`     | Open Prisma Studio                     |

## Project Structure

```
src/
  app/              # Next.js App Router pages and layouts
  components/       # React components (ui/, layout/, forms/)
  lib/              # Utility functions
  server/
    api/            # tRPC routers and procedures
    better-auth/    # Authentication config (Better Auth + Auth0)
    inngest/        # Background job definitions
    services/       # Service layer (interfaces + implementations)
  shared/
    constants/      # Shared constants (API paths, routes)
    schemas/        # Zod schemas shared between tRPC and forms
  trpc/             # tRPC client setup (react.tsx, server.ts)
```

## Code Conventions

- **Node version**: Pin to Node 20 LTS. An `.nvmrc` is provided — run `nvm use` before developing.
- **Package manager**: Use `pnpm` exclusively. Do not use `npm` or `yarn`.
- **Constants**: Use `~/shared/constants` for route paths and API base paths. Do not hardcode path strings.
- **Schemas**: Define Zod schemas in `~/shared/schemas/` and reuse them for both tRPC inputs and TanStack Form validation.
- **Auth guards**: Use `orgProtectedProcedure` or `roleProtectedProcedure()` for tRPC routes. All queries must be scoped by `orgId`.
- **Services**: Add new integrations via the service layer — define an interface in `services/interfaces/`, implement in `services/implementations/`.
