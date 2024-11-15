"use client";

import { useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NewsletterFormData, NewsletterFormSchema } from "@/lib/zod";
import { SubscribeToNewsletter } from "@/server/actions";
import { safeAsync } from "@/lib/utils";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import CaptchaWidget from "@/components/captcha-widget";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<TurnstileInstance | null>(null);

  const onValidFormSubmit: SubmitHandler<NewsletterFormData> = async () => {
    const formData = new FormData(formRef.current!);
    const token = captchaRef.current?.getResponse();

    const [error, res] = await safeAsync(
      fetch("/api/verify-captcha", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "content-type": "application/json",
        },
      })
    );

    if (error) {
      return toast.error("Uh oh! Something went wrong. Please try again.");
    }

    if (res.status === 200) {
      captchaRef.current?.reset();
      const [error] = await safeAsync(SubscribeToNewsletter(formData));
      if (error) {
        if (
          error.message ===
          'duplicate key value violates unique constraint "subscribers_email_unique"'
        ) {
          reset({ fullName: "", email: "" });
          return toast.info("You're already subscribed!");
        }
        return toast.error("Uh oh! Something went wrong. Please try again.");
      }
      reset({ fullName: "", email: "" });
      return toast.success(
        "You've successfully subscribed to our newsletter!",
        {
          description:
            "Please check your email for a confirmation link to complete your subscription.",
        }
      );
    }
    captchaRef.current?.reset();
    toast.error("Captcha is invalid or expired. Please try again.");
  };
  return (
    <form
      onSubmit={handleSubmit(onValidFormSubmit)}
      ref={formRef}
      className="flex flex-col gap-2 sm:flex-row"
    >
      <div className="space-y-1">
        <Input
          {...register("fullName")}
          placeholder="First and Last Name"
          type="text"
          required
          className={`${errors.fullName ? "border-destructive focus-visible:ring-0" : ""}`}
        />
        {errors.fullName && (
          <span className="text-xs text-destructive">
            {errors.fullName.message}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <Input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
          className={`${errors.email ? "border-destructive focus-visible:ring-0" : ""}`}
        />
        {errors.email && (
          <span className="text-xs text-destructive ">
            {errors.email.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="uppercase"
      >
        Subscribe
      </Button>
      <CaptchaWidget ref={captchaRef} className="hidden" />
    </form>
  );
}
