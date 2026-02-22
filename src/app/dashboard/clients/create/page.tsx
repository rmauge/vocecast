"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { createClientSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function CreateClientPage() {
  const router = useRouter();
  const utils = api.useUtils();

  const createClient = api.clients.create.useMutation({
    onSuccess: async () => {
      await utils.clients.invalidate();
      router.push("/dashboard/clients");
    },
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      preferredName: "",
      email: "",
      phoneNumber: "",
    },
    validators: {
      onSubmit: zodFormValidator(createClientSchema),
    },
    onSubmit: async ({ value }) => {
      await createClient.mutateAsync(value);
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Add Client" />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void form.handleSubmit();
            }}
            className="space-y-4"
          >
            <form.Field name="firstName">
              {(field) => (
                <FormField field={field} label="First Name" placeholder="John" />
              )}
            </form.Field>

            <form.Field name="lastName">
              {(field) => (
                <FormField field={field} label="Last Name" placeholder="Doe" />
              )}
            </form.Field>

            <form.Field name="preferredName">
              {(field) => (
                <FormField
                  field={field}
                  label="Preferred Name"
                  placeholder="Johnny"
                />
              )}
            </form.Field>

            <form.Field name="email">
              {(field) => (
                <FormField
                  field={field}
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                />
              )}
            </form.Field>

            <form.Field name="phoneNumber">
              {(field) => (
                <FormField
                  field={field}
                  label="Phone Number"
                  type="tel"
                  placeholder="+15551234567"
                />
              )}
            </form.Field>

            <div className="flex gap-2">
              <Button type="submit" disabled={createClient.isPending}>
                {createClient.isPending ? "Creating..." : "Create Client"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

            {createClient.error && (
              <p className="text-destructive text-sm">
                {createClient.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
