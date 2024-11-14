"use client";

import { useTheme } from "@/hooks/useTheme";
import { Icons } from "@/components/icons";
import { Button } from "react-aria-components";

export default function ToggleThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      onPress={toggleTheme}
      preventFocusOnPress
      className="relative text-muted-foreground hover:text-primary"
    >
      <Icons.sun size={24} className="absolute scale-100 dark:scale-0" />
      <Icons.moon size={24} className="scale-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
