import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.tsx",
  ],
  presets: [
    createPreset({
      addGlobalColors: true,
      preset: {
        light: {
          background: "30 6% 97%",
          foreground: "30 10% 10%",
          card: "30 6% 95%",
          "card-foreground": "30 10% 10%",
          popover: "30 6% 97%",
          "popover-foreground": "30 10% 10%",
          primary: "38 92% 50%",
          "primary-foreground": "0 0% 100%",
          secondary: "30 8% 90%",
          "secondary-foreground": "30 10% 15%",
          muted: "30 6% 92%",
          "muted-foreground": "30 5% 45%",
          accent: "38 80% 95%",
          "accent-foreground": "38 92% 35%",
          border: "30 8% 85%",
          ring: "38 92% 50%",
        },
        dark: {
          background: "24 10% 7%",
          foreground: "35 10% 88%",
          card: "25 10% 10%",
          "card-foreground": "35 10% 88%",
          popover: "25 12% 9%",
          "popover-foreground": "35 10% 88%",
          primary: "40 90% 52%",
          "primary-foreground": "24 10% 7%",
          secondary: "25 8% 15%",
          "secondary-foreground": "35 10% 82%",
          muted: "25 8% 14%",
          "muted-foreground": "30 6% 52%",
          accent: "25 10% 13%",
          "accent-foreground": "40 80% 62%",
          border: "25 8% 18%",
          ring: "40 90% 52%",
        },
      },
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};
