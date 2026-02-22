"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { createTemplateSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function CreateTemplatePage() {
  const router = useRouter();
  const utils = api.useUtils();

  const createTemplate = api.template.create.useMutation({
    onSuccess: async () => {
      await utils.template.invalidate();
      router.push("/dashboard/templates");
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      content: "",
    },
    validators: {
      onSubmit: zodFormValidator(createTemplateSchema),
    },
    onSubmit: async ({ value }) => {
      await createTemplate.mutateAsync(value);
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Create Template" />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Template Details</CardTitle>
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
                  label="Name"
                  placeholder="Appointment Reminder"
                />
              )}
            </form.Field>

            <form.Field name="content">
              {(field) => (
                <FormField
                  field={field}
                  label="Content"
                  type="textarea"
                  placeholder="Hi {{client.preferredName}}, this is a reminder..."
                />
              )}
            </form.Field>

            <p className="text-muted-foreground text-xs">
              Available variables: {"{{client.firstName}}"},{" "}
              {"{{client.lastName}}"}, {"{{client.preferredName}}"},{" "}
              {"{{day_time appointmentTime}}"}
            </p>

            <div className="flex gap-2">
              <Button type="submit" disabled={createTemplate.isPending}>
                {createTemplate.isPending ? "Creating..." : "Create Template"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

            {createTemplate.error && (
              <p className="text-destructive text-sm">
                {createTemplate.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
