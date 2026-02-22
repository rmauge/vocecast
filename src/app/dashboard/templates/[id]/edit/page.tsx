"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { updateTemplateSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function EditTemplatePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const utils = api.useUtils();

  const template = api.template.getById.useQuery({ id: params.id });

  const updateTemplate = api.template.update.useMutation({
    onSuccess: async () => {
      await utils.template.invalidate();
      router.push("/dashboard/templates");
    },
  });

  const deleteTemplate = api.template.delete.useMutation({
    onSuccess: async () => {
      await utils.template.invalidate();
      router.push("/dashboard/templates");
    },
  });

  const form = useForm({
    defaultValues: {
      name: template.data?.name ?? "",
      content: template.data?.content ?? "",
    },
    validators: {
      onSubmit: zodFormValidator(updateTemplateSchema),
    },
    onSubmit: async ({ value }) => {
      await updateTemplate.mutateAsync({ id: params.id, ...value });
    },
  });

  if (template.isLoading) return <div>Loading...</div>;
  if (!template.data) return <div>Template not found</div>;

  return (
    <div className="space-y-6">
      <PageHeader title="Edit Template" />

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
              {(field) => <FormField field={field} label="Name" />}
            </form.Field>

            <form.Field name="content">
              {(field) => (
                <FormField field={field} label="Content" type="textarea" />
              )}
            </form.Field>

            <div className="flex gap-2">
              <Button type="submit" disabled={updateTemplate.isPending}>
                {updateTemplate.isPending ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => deleteTemplate.mutate({ id: params.id })}
                disabled={deleteTemplate.isPending}
              >
                Delete
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
