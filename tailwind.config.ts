import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f3f0",
        card: "#ffffff",
        ink: "#111111",
        line: "#dddad4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        widest2: "0.28em",
      },
      fontSize: {
        hero: ["clamp(4.5rem, 15vw, 12rem)", { lineHeight: "0.85" }],
      },
    },
  },
  plugins: [],
};
export default config;
