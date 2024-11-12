"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NewsletterFormData, NewsletterFormSchema } from "@/lib/zod";
import { SubscribeToNewsletter } from "@/server/actions";
import { objectToFormData, safeAsync } from "@/lib/utils";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const onValidFormSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
    const formData = objectToFormData(data);
    const [error] = await safeAsync(SubscribeToNewsletter(formData));
    if (error) {
      if (
        error.message ===
        'duplicate key value violates unique constraint "subscribers_email_unique"'
      ) {
        reset({ fullName: "", email: "" });
        return toast.info("You're already subscribed!");
      }
      return toast.error("Uh oh! Something went wrong.", {
        description: "There was an issue. Please try again.",
      });
    }
    reset({ fullName: "", email: "" });
    toast.success("You've successfully subscribed to our newsletter!", {
      description:
        "Please check your email for a confirmation link to complete your subscription.",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onValidFormSubmit)}
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
