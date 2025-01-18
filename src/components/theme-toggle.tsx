"use client";

import { useCallback } from "react";
import {Sun,Moon} from "lucide-react";
import {useTheme} from "next-themes";

export default function ThemeToggle() {
    const {setTheme} = useTheme();

    const toggleTheme = useCallback(() => {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));
    }, [setTheme]);

    return (
        <button
            className="group p-2 rounded-full hover:bg-muted"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <Moon size={24} className="absolute scale-0 rotate-90 transition-all duration-500 dark:rotate-0 dark:scale-100 hover:motion-preset-spin"/>
            <Sun size={24} className="scale-100 rotate-0 transition-all duration-500 dark:-rotate-90 dark:scale-0 hover:motion-preset-spin"/>
        </button>
    );
}