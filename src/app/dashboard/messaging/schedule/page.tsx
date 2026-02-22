"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { PageHeader } from "~/components/layout/page-header";
import { scheduleSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function SchedulePage() {
  const router = useRouter();

  const clients = api.clients.list.useQuery();
  const templates = api.template.list.useQuery();
  const voices = api.voiceClone.list.useQuery();

  const schedule = api.scheduler.schedule.useMutation({
    onSuccess: () => {
      router.push("/dashboard/messaging");
    },
  });

  const form = useForm({
    defaultValues: {
      clientId: "",
      templateId: "",
      voiceId: "",
      appointmentTime: "",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      reminderOffset: "DAY_BEFORE_MORNING" as "DAY_BEFORE_MORNING" | "DAY_BEFORE_AFTERNOON" | "DAY_BEFORE_EVENING",
    },
    validators: {
      onSubmit: zodFormValidator(scheduleSchema),
    },
    onSubmit: async ({ value }) => {
      await schedule.mutateAsync(value);
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Schedule Reminder" />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Schedule Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void form.handleSubmit();
            }}
            className="space-y-4"
          >
            <form.Field name="clientId">
              {(field) => (
                <div className="space-y-2">
                  <Label>Client</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(v) => field.handleChange(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.data?.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.firstName} {c.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </form.Field>

            <form.Field name="templateId">
              {(field) => (
                <div className="space-y-2">
                  <Label>Template</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(v) => field.handleChange(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.data?.map((t) => (
                        <SelectItem key={t.id} value={t.id}>
                          {t.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </form.Field>

            <form.Field name="voiceId">
              {(field) => (
                <div className="space-y-2">
                  <Label>Voice</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(v) => field.handleChange(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {voices.data?.map((v) => (
                        <SelectItem key={v.id} value={v.id}>
                          {v.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </form.Field>

            <form.Field name="appointmentTime">
              {(field) => (
                <div className="space-y-2">
                  <Label>Appointment Date & Time</Label>
                  <Input
                    type="datetime-local"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>

            <form.Field name="reminderOffset">
              {(field) => (
                <div className="space-y-2">
                  <Label>Reminder Time</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={(v) =>
                      field.handleChange(
                        v as
                          | "DAY_BEFORE_MORNING"
                          | "DAY_BEFORE_AFTERNOON"
                          | "DAY_BEFORE_EVENING",
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DAY_BEFORE_MORNING">
                        Day Before - Morning (8am-12pm)
                      </SelectItem>
                      <SelectItem value="DAY_BEFORE_AFTERNOON">
                        Day Before - Afternoon (12pm-4pm)
                      </SelectItem>
                      <SelectItem value="DAY_BEFORE_EVENING">
                        Day Before - Evening (4pm-8pm)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </form.Field>

            <div className="flex gap-2">
              <Button type="submit" disabled={schedule.isPending}>
                {schedule.isPending ? "Scheduling..." : "Schedule Reminder"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

            {schedule.error && (
              <p className="text-destructive text-sm">
                {schedule.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
