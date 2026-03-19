/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0d80f2",
        "background-light": "#f5f7f8",
        "background-dark": "#111418",
        "neutral-gray": "#f0f2f5",
        "text-dark": "#1d232a",
        "text-light-gray": "#6c757d",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}