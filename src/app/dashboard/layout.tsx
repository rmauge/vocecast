import { redirect } from "next/navigation";
import { SidebarProvider } from "~/components/ui/sidebar";
import { DashboardSidebar } from "~/components/layout/dashboard-sidebar";
import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";
import { ROUTES } from "~/shared/constants";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) {
    redirect(ROUTES.LOGIN);
  }

  // Fetch the full user to get role and orgId
  const user = await db.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user?.orgId) {
    redirect(ROUTES.ONBOARDING);
  }

  return (
    <SidebarProvider>
      <DashboardSidebar userRole={user.role} />
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </SidebarProvider>
  );
}
