/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "lemon-milk": "var(--font-lemonMilk)",
      "lato": "var(--font-lato)"
    }
  },
  plugins: [],
}