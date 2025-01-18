import type { Config } from "tailwindcss";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
        ring: {
          DEFAULT: "var(--color-ring)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        }
      },
      fontFamily: {
        sans: ["var(--font-rubik-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [tailwindcssTypography,tailwindcssAnimate,require("tailwindcss-motion")],
} satisfies Config;
