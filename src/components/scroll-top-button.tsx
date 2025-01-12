"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useScrollVisible } from "@/hooks/useScrollVisible";

export default function ScrollTopButton() {
  const handleScrollTop = useScrollTop({ behavior: "smooth" });
  const visible = useScrollVisible();

  return (
    <Button
      onClick={handleScrollTop}
      size="icon"
      variant="ghost"
      className={cn(
        "fixed bottom-4 right-4 lg:bottom-6 lg:right-6",
        visible ? "flex" : "hidden",
      )}
    >
      <Icons.arrowUp className="!size-5" />
    </Button>
  );
}
