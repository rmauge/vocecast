import { Suspense } from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { Skeleton } from "~/components/ui/skeleton";
import { api, HydrateClient } from "~/trpc/server";
import { DashboardStats } from "./_components/dashboard-stats";

export default async function DashboardPage() {
  void api.clients.count.prefetch();
  void api.template.count.prefetch();

  return (
    <HydrateClient>
      <div className="space-y-6">
        <PageHeader
          title="Dashboard"
          description="Overview of your Vocecast workspace"
        />

        <Suspense fallback={<DashboardStatsSkeleton />}>
          <DashboardStats />
        </Suspense>
      </div>
    </HydrateClient>
  );
}

function DashboardStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <Skeleton className="h-4 w-24" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
