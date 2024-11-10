"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsletterFormSchema } from "@/lib/zod";
import { z } from "zod";
import { SubscribeToNewsletter } from "@/server/actions";
import { objectToFormData } from "@/lib/utils";
import { useEffect } from "react";

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    reset({ name: "", email: "" });
  }, [reset, isSubmitSuccessful]);

  const onValidFormSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
    const formData = objectToFormData(data);
    try {
      await SubscribeToNewsletter(formData);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2 text-pretty text-sm">
        <p className="font-semibold">Subscribe to my newsletter</p>
        <p className="text-muted-foreground">
          Get a recap of the latest news, articles, videos and resources, sent
          to your inbox every two weeks.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onValidFormSubmit)}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <div className="space-y-1">
          <Input
            {...register("name")}
            placeholder="Name"
            type="text"
            required
            className={`${errors.name ? "border-destructive focus-visible:ring-0" : ""}`}
          />
          {errors.name && (
            <span className="text-xs text-destructive">
              {errors.name.message}
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
      </form>
    </div>
  );
}
