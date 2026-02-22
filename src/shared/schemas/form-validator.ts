import type { z } from "zod";

/**
 * Wraps a Zod schema as a TanStack Form onSubmit validator.
 * Returns field-level errors mapped by field path.
 */
export function zodFormValidator<T extends z.ZodSchema>(schema: T) {
  return ({ value }: { value: unknown }) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      // Build a map of field path -> error messages
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path.join(".");
        if (path) {
          fieldErrors[path] = fieldErrors[path]
            ? `${fieldErrors[path]}, ${issue.message}`
            : issue.message;
        }
      }

      // Return field errors object for TanStack Form
      return {
        fields: fieldErrors,
      };
    }
    return undefined;
  };
}
