import { redirect } from "next/navigation";
import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";

export default async function LoginPage() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white/10 p-8 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">
            Voce<span className="text-[hsl(280,100%,70%)]">cast</span>
          </h1>
          <p className="mt-2 text-white/60">Sign in to your account</p>
        </div>

        <form>
          <button
            className="w-full rounded-full bg-[hsl(280,100%,70%)] px-10 py-3 font-semibold text-white no-underline transition hover:bg-[hsl(280,100%,60%)]"
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
      </div>
    </main>
  );
}
