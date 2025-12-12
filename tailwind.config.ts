import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./constants.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#f97316", // Orange 500
        "primary-hover": "#ea580c", // Orange 600
        secondary: "#0ea5e9", // Sky 500 (Ocean Blue)
        dark: "#0a0a0a", // Neutral 950 (Deep Black)
        "dark-light": "#171717", // Neutral 900
      },
    },
  },
  plugins: [],
};

export default config;
