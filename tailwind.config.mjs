import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Untitled Sans Web", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
