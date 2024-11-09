"use client";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function ToggleThemeButton() {

    const {toggleTheme} = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg"
        >
            <Icons.sun className="size-[20px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute size-[20px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}