/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: { DEFAULT: "#F9F9F7", dark: "#121212" },
        surface: { DEFAULT: "#FFFFFF", dark: "#1E1E1E" },
        ink: { DEFAULT: "#2D3142", dim: "#8B93A5", dark: "#E2E8F0", "dim-dark": "#94A3B8" },
        line: { DEFAULT: "#E2E8F0", dark: "#334155" },
        accent: { DEFAULT: "#7BA05B", dark: "#92B872" },
        focus: { DEFAULT: "#5C6B9C", dark: "#7686BA" },
        danger: { DEFAULT: "#E07A5F", dark: "#EE8B70" },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
