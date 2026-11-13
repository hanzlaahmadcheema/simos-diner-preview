import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cherry: {
          50: "#fdf2f2",
          100: "#fbe4e4",
          200: "#f6c9c9",
          300: "#eda6a6",
          400: "#e07a7a",
          500: "#c94f4f",
          600: "#b91c1c",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#450a0a",
        },
        navy: {
          DEFAULT: "#1e3a5f",
          dark: "#152a46",
          light: "#e8eef4",
        },
        honey: "#d9a441",
        ivory: "#fdf8f0",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#2b1a1a",
        muted: "#6b5a54",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
