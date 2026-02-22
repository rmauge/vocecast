import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Voce<span className="text-[hsl(280,100%,70%)]">cast</span>
        </h1>
        <p className="text-center text-lg text-white/80">
          Automated voice reminders for your business
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          {!session ? (
            <form>
              <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                formAction={async () => {
                  "use server";
                  const res = await auth.api.signInWithOAuth2({
                    body: {
                      providerId: "auth0",
                    },
                  });
                  if (!res.url) {
                    throw new Error("No URL returned from signInWithOAuth2");
                  }
                  redirect(res.url);
                }}
              >
                Sign in with Auth0
              </button>
            </form>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-[hsl(280,100%,70%)] px-10 py-3 font-semibold text-white no-underline transition hover:bg-[hsl(280,100%,60%)]"
              >
                Go to Dashboard
              </Link>
              <form>
                <button
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                  formAction={async () => {
                    "use server";
                    await auth.api.signOut({
                      headers: await headers(),
                    });
                    redirect("/");
                  }}
                >
                  Sign out
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
