import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#070806", gold: "#d7b36a", cream: "#f4efe5" },
      fontFamily: { sans: ["var(--font-manrope)", "sans-serif"], display: ["var(--font-dm-serif)", "serif"] }
    }
  },
  plugins: []
} satisfies Config;
