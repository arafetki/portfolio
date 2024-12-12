import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme } = useNextTheme();

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    setDark: () => setTheme("dark"),
    setLight: () => setTheme("light"),
    setSystem: () => setTheme("system"),
  };
}
