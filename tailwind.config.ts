import { UnifrakturCook } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        syneMono: ['var(--font-syne-mono)', 'monospace'],
        unifrakturCook: ['var(--font-unifrakturcook)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;

