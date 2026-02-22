"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
interface FormFieldProps {
  field: any;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
}

export function FormField({
  field,
  label,
  type = "text",
  placeholder,
}: FormFieldProps) {
  const hasError =
    field.state.meta.isTouched && field.state.meta.errors.length > 0;

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          id={field.name}
          name={field.name}
          value={field.state.value ?? ""}
          onBlur={field.handleBlur}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            field.handleChange(e.target.value)
          }
          placeholder={placeholder}
          className={hasError ? "border-destructive" : ""}
        />
      ) : (
        <Input
          id={field.name}
          name={field.name}
          type={type}
          value={field.state.value ?? ""}
          onBlur={field.handleBlur}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            field.handleChange(e.target.value)
          }
          placeholder={placeholder}
          className={hasError ? "border-destructive" : ""}
        />
      )}
      {hasError && (
        <p className="text-destructive text-sm">
          {field.state.meta.errors
            .map((e: { message?: string } | string) =>
              typeof e === "string" ? e : e.message,
            )
            .join(", ")}
        </p>
      )}
    </div>
  );
}
