import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#11151D",
        surface2: "#161B26",
        border: "#232938",
        ink: "#D7DEE9",
        muted: "#7C8798",
        coral: "#FF6B4A",
        cyan: "#5EEAD4",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(215,222,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(215,222,233,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        fadeUp: "fadeUp 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
