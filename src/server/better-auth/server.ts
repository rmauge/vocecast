import { auth } from ".";
import { headers } from "next/headers";
import { cache } from "react";

// React cache() deduplicates this call within a single server request,
// so multiple Server Components can call getSession() without redundant work.
export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() })
);
