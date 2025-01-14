"use client";

import { Icons } from "@/components/icons";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

interface ScrollDownProps extends React.HTMLAttributes<HTMLButtonElement> {
  to: number;
}

export default function ScrollDown({
  to,
  className,
  ...props
}: ScrollDownProps) {
  const handleScroll = useScroll({ top: to, behavior: "smooth" });

  return (
    <button
      onClick={handleScroll}
      className={cn("flex gap-x-1", className)}
      {...props}
    >
      <p className="text-muted-foreground">Scroll</p>
      <Icons.arrowdown className="!size-6 animate-bounce" />
    </button>
  );
}
