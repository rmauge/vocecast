"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { api } from "~/trpc/react";

export default function MessagingPage() {
  const reminders = api.scheduler.list.useQuery();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Messaging Hub"
        description="Send and schedule voice reminders"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Now</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Send a voice reminder immediately to a client.
            </p>
            <Link href="/dashboard/messaging/send-now">
              <Button className="w-full">Send Reminder Now</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Schedule a reminder for a future appointment.
            </p>
            <Link href="/dashboard/messaging/schedule">
              <Button variant="outline" className="w-full">
                Schedule Reminder
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          {reminders.isLoading && <p>Loading...</p>}
          {reminders.data?.length === 0 && (
            <p className="text-muted-foreground text-sm">
              No reminders yet. Send your first one!
            </p>
          )}
          {reminders.data && reminders.data.length > 0 && (
            <div className="space-y-2">
              {reminders.data.slice(0, 10).map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between rounded-md border p-3"
                >
                  <div>
                    <p className="font-medium">
                      {r.client.firstName} {r.client.lastName}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {r.template.name}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
