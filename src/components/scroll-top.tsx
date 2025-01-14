"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollVisible } from "@/hooks/useScrollVisible";

type ScrollTopProps = {
  visibleHeight?: number;
  position?: "bottom-right" | "bottom-left" | "bottom-center";
};

export default function ScrollTop({
  visibleHeight = 300,
  position = "bottom-center",
}: ScrollTopProps) {
  const handleScroll = useScroll({ top: 0, behavior: "smooth" });
  const visible = useScrollVisible(visibleHeight);

  return (
    <Button
      onClick={handleScroll}
      size="icon"
      variant="outline"
      className={cn("fixed rounded-full", visible ? "flex" : "hidden", {
        "bottom-8 right-5": position === "bottom-right",
        "bottom-8 left-5": position === "bottom-left",
        "bottom-8 left-1/2 -translate-x-1/2": position === "bottom-center",
      })}
    >
      <Icons.arrowUp className="!size-5" />
    </Button>
  );
}
