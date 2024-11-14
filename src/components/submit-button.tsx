import { Button, ButtonProps } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = ButtonProps;

export default function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} {...rest}>
      {children}
    </Button>
  );
}
