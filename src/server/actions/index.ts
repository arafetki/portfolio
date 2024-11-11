"use server";

import { NewsletterFormSchema } from "@/lib/zod";
import { insertSubscriber } from "../db/query/subs";
import { generateToken } from "@/lib/jwt";

export async function SubscribeToNewsletter(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  try {
    const parsedData = NewsletterFormSchema.parse(data);

    const [firstName, lastName] = parsedData.name.split(" ");

    const response = await insertSubscriber({
      email: parsedData.email,
      firstName,
      lastName,
    });

    const payload = {
      subId: response[0].subId,
    };

    const token = generateToken(payload, "1h");

    console.log("token: ", token);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw error;
    throw new Error("Unexpected error happened during creating subscriber");
  }
}
