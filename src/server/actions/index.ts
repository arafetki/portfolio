"use server";

import { NewsletterFormSchema } from "@/lib/zod";

export async function SubscribeToNewsletter(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsedData = NewsletterFormSchema.parse(data);
  console.log(parsedData);
}
