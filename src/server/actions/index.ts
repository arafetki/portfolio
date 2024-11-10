"use server";

import { NewsletterFormSchema } from "@/lib/zod";
import { resend } from "@/lib/resend";
import { env } from "@/env";

export async function SubscribeToNewsletter(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  try {
    const parsedData = NewsletterFormSchema.parse(data);

    const [firstName, lastName] = parsedData.name.split(" ");

    resend.contacts.create({
      email: parsedData.email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: env.RESEND_AUDIENCE_ID,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw error;
    throw new Error("Unexpected error happened during creating subscriber");
  }
}
