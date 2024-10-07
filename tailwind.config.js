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
      keyframes: {
        tear: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
      },
      animation: {
        tear: "tear 1s ease-in-out forwards",
      },
    },
  },
  variants: {},
  plugins: [],
};
