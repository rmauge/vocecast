"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { updateVoiceCloneSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function EditVoicePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const utils = api.useUtils();

  const voice = api.voiceClone.getById.useQuery({ id: params.id });

  const updateVoice = api.voiceClone.update.useMutation({
    onSuccess: async () => {
      await utils.voiceClone.invalidate();
      router.push("/dashboard/voices");
    },
  });

  const deleteVoice = api.voiceClone.delete.useMutation({
    onSuccess: async () => {
      await utils.voiceClone.invalidate();
      router.push("/dashboard/voices");
    },
  });

  const form = useForm({
    defaultValues: {
      name: voice.data?.name ?? "",
      description: voice.data?.description ?? "",
    },
    validators: {
      onSubmit: zodFormValidator(updateVoiceCloneSchema),
    },
    onSubmit: async ({ value }) => {
      await updateVoice.mutateAsync({ id: params.id, ...value });
    },
  });

  if (voice.isLoading) return <div>Loading...</div>;
  if (!voice.data) return <div>Voice not found</div>;

  return (
    <div className="space-y-6">
      <PageHeader title="Edit Voice Clone" />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Voice Details</CardTitle>
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
              {(field) => <FormField field={field} label="Voice Name" />}
            </form.Field>

            <form.Field name="description">
              {(field) => (
                <FormField
                  field={field}
                  label="Description"
                  type="textarea"
                />
              )}
            </form.Field>

            <div className="flex gap-2">
              <Button type="submit" disabled={updateVoice.isPending}>
                {updateVoice.isPending ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => deleteVoice.mutate({ id: params.id })}
                disabled={deleteVoice.isPending}
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
