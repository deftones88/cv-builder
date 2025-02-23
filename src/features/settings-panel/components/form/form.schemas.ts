import { z } from "zod";

export const textFieldSchema = z.object({
  value: z.string(),
});
export const selectFieldSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});
export const radioFieldSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export const fieldSchema = z.object({
  id: z.number(),
  type: z.enum(["text", "select", "radio"]),
  label: z.string(),
  value: z.string(),
  options: z.array(z.string()).optional(),
});

export const formSchema = z.object({
  fields: z.array(fieldSchema),
});
