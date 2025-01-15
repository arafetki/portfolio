"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SideBarProps = React.HTMLAttributes<HTMLElement>;

export default function SideBar({ className, ...props }: SideBarProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <aside
      className={cn(
        "cursor-pointer fixed top-1/2 h-40 -translate-y-1/2 left-0 bg-foreground hidden lg:block transition-all duration-300 ease-in-out",
        expanded ? "w-20" : "w-10",
        className,
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      {...props}
    ></aside>
  );
}
