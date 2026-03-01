import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { auth0, genericOAuth } from "better-auth/plugins";

import { env } from "~/env";
import { db } from "~/server/db";
import { API } from "~/shared/constants";

export const auth = betterAuth({
  // URL path prefix for all auth endpoints (e.g. /api/auth/sign-in, /api/auth/session)
  basePath: API.AUTH_BASE_PATH,

  // Public-facing base URL used to construct absolute callback URLs
  baseURL: env.BETTER_AUTH_BASE_URL,

  // Prisma adapter bridges Better Auth's data layer to our PostgreSQL database
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  // Enable email/password sign-up and sign-in (in addition to OAuth)
  emailAndPassword: {
    enabled: true,
  },

  // Extend the default user model with custom fields for multi-tenant RBAC.
  // input: false prevents these from being set via client-side sign-up requests —
  // they are managed server-side only.
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER", // Maps to UserRole enum (ADMIN, POWER_USER, USER)
        input: false,
      },
      orgId: {
        type: "string",
        required: false, // Null until the user completes onboarding
        input: false,
      },
    },
  },

  // No direct social providers — OAuth is handled via the genericOAuth plugin below
  socialProviders: {},

  plugins: [
    // genericOAuth wraps provider-specific OAuth flows (Auth0 in our case)
    // into Better Auth's unified callback system
    genericOAuth({
      config: [
        auth0({
          clientId: env.AUTH0_CLIENT_ID,
          clientSecret: env.AUTH0_CLIENT_SECRET,
          domain: env.AUTH0_DOMAIN,
          // Where Auth0 redirects after login — must match Auth0 dashboard "Allowed Callback URLs"
          redirectURI: `${env.BETTER_AUTH_BASE_URL}${API.AUTH_BASE_PATH}/oauth2/callback/auth0`,
        }),
      ],
    }),

    // nextCookies() enables reading/writing auth cookies via Next.js headers(),
    // required for Server Component session access
    nextCookies(),
  ],
});

// Inferred session type including our custom user fields (role, orgId)
export type Session = typeof auth.$Infer.Session;
