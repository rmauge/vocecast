import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { auth0, genericOAuth } from "better-auth/plugins";

import { env } from "~/env";
import { db } from "~/server/db";
import { API } from "~/shared/constants";

export const auth = betterAuth({
  basePath: API.AUTH_BASE_PATH,
  baseURL: env.BETTER_AUTH_BASE_URL,
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        input: false,
      },
      orgId: {
        type: "string",
        required: false,
        input: false,
      },
    },
  },
  socialProviders: {},
  plugins: [
    genericOAuth({
      config: [
        auth0({
          clientId: env.AUTH0_CLIENT_ID,
          clientSecret: env.AUTH0_CLIENT_SECRET,
          domain: env.AUTH0_DOMAIN,
          redirectURI: `${env.BETTER_AUTH_BASE_URL}${API.AUTH_BASE_PATH}/oauth2/callback/auth0`,
        }),
      ],
    }),
    nextCookies(),
  ],
});

export type Session = typeof auth.$Infer.Session;
