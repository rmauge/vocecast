"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FormField } from "~/components/forms/form-field";
import { createOrganizationSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function OnboardingPage() {
  const router = useRouter();

  const createOrg = api.organization.create.useMutation({
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    validators: {
      onSubmit: zodFormValidator(createOrganizationSchema),
    },
    onSubmit: async ({ value }) => {
      await createOrg.mutateAsync(value);
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to Vocecast</CardTitle>
          <p className="text-muted-foreground">
            Set up your organization to get started
          </p>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void form.handleSubmit();
            }}
            className="space-y-4"
          >
            <form.Field name="name">
              {(field) => (
                <FormField
                  field={field}
                  label="Organization Name"
                  placeholder="My Business"
                />
              )}
            </form.Field>

            <form.Field name="email">
              {(field) => (
                <FormField
                  field={field}
                  label="Organization Email"
                  type="email"
                  placeholder="contact@mybusiness.com"
                />
              )}
            </form.Field>

            <form.Field name="phone">
              {(field) => (
                <FormField
                  field={field}
                  label="Phone Number"
                  type="tel"
                  placeholder="+15551234567"
                />
              )}
            </form.Field>

            <Button
              type="submit"
              className="w-full"
              disabled={createOrg.isPending}
            >
              {createOrg.isPending ? "Creating..." : "Create Organization"}
            </Button>

            {createOrg.error && (
              <p className="text-destructive text-sm">
                {createOrg.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
