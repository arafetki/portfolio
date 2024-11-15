"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import { Icons } from "@/components/icons";

type SubmitButtonProps = ButtonProps;

export default function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} {...rest}>
      {pending && (
        <Icons.loader
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="-ms-1 me-2 animate-spin"
        />
      )}
      {children}
    </Button>
  );
}
