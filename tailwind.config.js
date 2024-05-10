/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DOSGreen: "rgb(0, 0, 170)",
      },
    },
  },
  plugins: [],
};
