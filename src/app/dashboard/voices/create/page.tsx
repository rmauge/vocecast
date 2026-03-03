"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { PageHeader } from "~/components/layout/page-header";
import { FormField } from "~/components/forms/form-field";
import { VoiceSampleInput } from "~/components/audio/voice-sample-input";
import { createVoiceCloneSchema } from "~/shared/schemas";
import { api } from "~/trpc/react";
import { zodFormValidator } from "~/shared/schemas/form-validator";

export default function CreateVoicePage() {
  const router = useRouter();
  const utils = api.useUtils();

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

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
      if (!audioFile) {
        setUploadError("Please record or upload an audio sample.");
        return;
      }

      // 1. Upload voice sample to S3
      setIsUploading(true);
      setUploadError(null);
      try {
        const formData = new FormData();
        formData.append("file", audioFile);
        formData.append("name", value.name);
        if (value.description) {
          formData.append("description", value.description);
        }

        const res = await fetch("/api/upload/voice-sample", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const err = (await res.json()) as { error?: string };
          setUploadError(err.error ?? "Upload failed");
          return;
        }
      } catch {
        setUploadError("Upload failed. Please try again.");
        return;
      } finally {
        setIsUploading(false);
      }

      // 2. Create voice clone via tRPC
      // TODO: Use uploaded sample to create clone via ElevenLabs
      // and get a real providerId
      await createVoice.mutateAsync({
        ...value,
        providerId: "placeholder-" + Date.now(),
      });
    },
  });

  const isBusy = isUploading || createVoice.isPending;

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

            <VoiceSampleInput
              value={audioFile}
              onChange={(file) => {
                setAudioFile(file);
                setUploadError(null);
              }}
              error={uploadError ?? undefined}
            />

            <div className="flex gap-2">
              <Button type="submit" disabled={isBusy || !audioFile}>
                {isUploading
                  ? "Uploading..."
                  : createVoice.isPending
                    ? "Creating..."
                    : "Create Voice"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isBusy}
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
