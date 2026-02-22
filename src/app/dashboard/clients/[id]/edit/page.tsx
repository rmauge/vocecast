"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { updateClientSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function EditClientPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const utils = api.useUtils();

  const client = api.clients.getById.useQuery({ id: params.id });

  const updateClient = api.clients.update.useMutation({
    onSuccess: async () => {
      await utils.clients.invalidate();
      router.push("/dashboard/clients");
    },
  });

  const deleteClient = api.clients.delete.useMutation({
    onSuccess: async () => {
      await utils.clients.invalidate();
      router.push("/dashboard/clients");
    },
  });

  const form = useForm({
    defaultValues: {
      firstName: client.data?.firstName ?? "",
      lastName: client.data?.lastName ?? "",
      preferredName: client.data?.preferredName ?? "",
      email: client.data?.email ?? "",
      phoneNumber: client.data?.phoneNumber ?? "",
    },
    validators: {
      onSubmit: zodFormValidator(updateClientSchema),
    },
    onSubmit: async ({ value }) => {
      await updateClient.mutateAsync({ id: params.id, ...value });
    },
  });

  if (client.isLoading) return <div>Loading...</div>;
  if (!client.data) return <div>Client not found</div>;

  return (
    <div className="space-y-6">
      <PageHeader title="Edit Client" />

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
              {(field) => <FormField field={field} label="First Name" />}
            </form.Field>

            <form.Field name="lastName">
              {(field) => <FormField field={field} label="Last Name" />}
            </form.Field>

            <form.Field name="preferredName">
              {(field) => <FormField field={field} label="Preferred Name" />}
            </form.Field>

            <form.Field name="email">
              {(field) => (
                <FormField field={field} label="Email" type="email" />
              )}
            </form.Field>

            <form.Field name="phoneNumber">
              {(field) => (
                <FormField field={field} label="Phone Number" type="tel" />
              )}
            </form.Field>

            <div className="flex gap-2">
              <Button type="submit" disabled={updateClient.isPending}>
                {updateClient.isPending ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => deleteClient.mutate({ id: params.id })}
                disabled={deleteClient.isPending}
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
