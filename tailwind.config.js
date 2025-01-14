/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-cirno": "spin 30s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
