import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F8FFF",
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8eccff",
          400: "#58b0ff",
          500: "#2F8FFF",
          600: "#1772f4",
          700: "#105be0",
          800: "#1349b5",
          900: "#153f8e",
        },
        navy: {
          950: "#060913", // Main dark canvas
          900: "#0a0e1c",
          850: "#0f1527",
          800: "#151d34",
          700: "#1e2947",
          card: "#0d1324",
          cardHover: "#121b33",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 35px -5px rgba(47, 143, 255, 0.3)",
        "glow-card": "0 10px 40px -10px rgba(47, 143, 255, 0.15)",
        "pill-active": "0 4px 20px rgba(47, 143, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
