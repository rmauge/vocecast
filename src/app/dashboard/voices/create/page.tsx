"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { createVoiceCloneSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function CreateVoicePage() {
  const router = useRouter();
  const utils = api.useUtils();

  const createVoice = api.voiceClone.create.useMutation({
    onSuccess: async () => {
      await utils.voiceClone.invalidate();
      router.push("/dashboard/voices");
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    validators: {
      onSubmit: zodFormValidator(createVoiceCloneSchema),
    },
    onSubmit: async ({ value }) => {
      // TODO: First upload voice sample via /api/upload/voice,
      // then create voice via ElevenLabs, then save metadata
      // For now, placeholder with manual providerId
      await createVoice.mutateAsync({
        ...value,
        providerId: "placeholder-" + Date.now(),
      });
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Create Voice Clone" />

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
              {(field) => (
                <FormField
                  field={field}
                  label="Voice Name"
                  placeholder="My Voice"
                />
              )}
            </form.Field>

            <form.Field name="description">
              {(field) => (
                <FormField
                  field={field}
                  label="Description"
                  type="textarea"
                  placeholder="Describe this voice clone..."
                />
              )}
            </form.Field>

            <div className="rounded-md border border-dashed p-6 text-center">
              <p className="text-muted-foreground text-sm">
                Voice sample upload will be available here.
              </p>
              <p className="text-muted-foreground text-xs">
                Record or upload an audio file to create a voice clone.
              </p>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={createVoice.isPending}>
                {createVoice.isPending ? "Creating..." : "Create Voice"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

            {createVoice.error && (
              <p className="text-destructive text-sm">
                {createVoice.error.message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
