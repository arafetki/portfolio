"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollVisible } from "@/hooks/useScrollVisible";

type ScrollTopProps = {
  visibleHeight?: number;
  position?: "bottom-right" | "bottom-left";
};

export default function ScrollTop({
  visibleHeight = 300,
  position = "bottom-right",
}: ScrollTopProps) {
  const handleScroll = useScroll({ top: 0, behavior: "smooth" });
  const visible = useScrollVisible(visibleHeight);

  return (
    <Button
      onClick={handleScroll}
      size="icon"
      variant="ghost"
      className={cn("fixed rounded-full", visible ? "flex" : "hidden", {
        "bottom-5 right-5": position === "bottom-right",
        "bottom-5 left-5": position === "bottom-left",
      })}
    >
      <Icons.arrowUp className="!size-5" />
    </Button>
  );
}
