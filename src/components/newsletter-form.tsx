"use client";

import { useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NewsletterFormData, NewsletterFormSchema } from "@/lib/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onValidFormSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
    console.log(data);
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
    </form>
  );
}
