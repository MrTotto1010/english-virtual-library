/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E4C8C",
          dark: "#243B70",
          light: "#DCE5F7",
        },
        accent: {
          DEFAULT: "#FA2D1A",
          dark: "#D92314",
          light: "#FFE0DC",
        },
        cream: "#FFF4E2",
        ink: "#1F2937",
        muted: "#6B7280",
      },
    },
  },
  plugins: [],
};