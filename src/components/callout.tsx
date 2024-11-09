import { cn } from "@/lib/utils";

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  type?: "default" | "primary" | "warning" | "danger";
}

export default function Callout({
  children,
  type = "default",
  className,
  ...rest
}: CalloutProps) {
  return (
    <div
      className={cn(
        "border rounded-md border-l-4 my-6 p-4",
        {
          "border-l-blue-500": type === "default",
          "border-l-primary": type === "primary",
          "border-l-yellow-700": type === "warning",
          "border-l-destructive": type === "danger",
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
