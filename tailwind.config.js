/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#cccccc",
        accent: "#0071E3",
        background: "#000000",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
