import { z } from "zod";

export const NewsletterFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Must be a valid email address." }),
});

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;
