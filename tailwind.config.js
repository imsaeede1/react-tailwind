/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-purple": "#08004D",
        "blue-arghavan": "#00DCFF",
        "purple-light": "#BBC3FF",
      },
    },
  },
  plugins: [],
};
