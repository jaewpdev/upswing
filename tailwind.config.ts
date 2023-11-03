import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        brand: {
          black: "#252525",
          green: "#34bb8b",
          gray: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        mono: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
export default config;
