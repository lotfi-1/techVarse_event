/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to right, #E4DED3 0%, #EFECE6 100%)",
      },
      colors: {
        "primary-txt": "var(--primary-txt)",
        "btn-background": "var(--btn-background)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        shadow: "var(--shadow-color)",
        primary: {
          400: "#0C0D0E",
          300: "#101214",
          200: "#1A1A1A",
          100: "#555555",
        },
        secondary: {
          300: "#878787",
          200: "#CCCCCC",
          100: "#F7F7F7",
        },
        accent: {
          100: "#EFECE6",
        },
        purple: "#A849F4",

      },
      spacing: {
        "w-1/2": "calc((100% / 2) - 24px)",
        "w-2/3": "calc((100% * 2 / 3) - 80px)",
        dimension: "var(--dimension)",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
