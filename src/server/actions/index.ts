"use server";

import { resend } from "@/lib/resend";
import { NewsletterFormSchema } from "@/lib/zod";
import { insertOne, deleteOne } from "@/server/db/query/subs";
import { generateToken } from "@/lib/jwt";
import { TOKEN_EXPIRE_IN } from "@/config/constants";
// import { retryWithBackoff } from "@/lib/utils";

export async function SubscribeToNewsletter(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const parsedData = NewsletterFormSchema.parse(data);

  const [firstName, lastName] = parsedData.fullName.split(" ");

  const { subId } = await insertOne({
    email: parsedData.email,
    firstName,
    lastName,
  });

  const token = generateToken({ subId }, TOKEN_EXPIRE_IN);
  const verifyEmailURL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/verify-email?token=${token}`;

  const response = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [parsedData.email],
    subject: "Confirm your Email",
    html: `<p>confirmation link: <a href=${verifyEmailURL}>${verifyEmailURL}</a></p>`,
  });

  if (response.error) {
    await deleteOne(subId);
    throw new Error(response.error.message);
  }
}
