"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { PageHeader } from "~/components/layout/page-header";
import { sendNowSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function SendNowPage() {
  const router = useRouter();

  const clients = api.clients.list.useQuery();
  const templates = api.template.list.useQuery();
  const voices = api.voiceClone.list.useQuery();

  const sendNow = api.messaging.sendNow.useMutation({
    onSuccess: () => {
      router.push("/dashboard/messaging");
    },
  });

  const form = useForm({
    defaultValues: {
      clientId: "",
      templateId: "",
      voiceId: "",
    },
    validators: {
      onSubmit: zodFormValidator(sendNowSchema),
    },
    onSubmit: async ({ value }) => {
      await sendNow.mutateAsync(value);
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Send Reminder Now" />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Send Details</CardTitle>
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

            <div className="flex gap-2">
              <Button type="submit" disabled={sendNow.isPending}>
                {sendNow.isPending ? "Sending..." : "Send Now"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

            {sendNow.error && (
              <p className="text-destructive text-sm">
                {sendNow.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
