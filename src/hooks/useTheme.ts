import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {

    const {theme,setTheme} = useNextTheme()

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

    const setDark = () => setTheme("dark")

    const setLight = () => setTheme("light")

    const setSystem = () => setTheme("system")

    return {
        theme,
        setTheme,
        toggleTheme,
        setDark,
        setLight,
        setSystem
    }
}
