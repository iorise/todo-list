/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    darkTheme: "false",
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
