import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        "responsive-fit": "repeat(auto-fit, minmax(280px, 1fr))",
        "responsive-fit-two": "repeat(auto-fit, minmax(250px, 1fr))",
        "responsive-fit-large": "repeat(auto-fit, minmax(320px, 1fr))",
      },
      keyframes: {
        pulseBorder: {
          "0%": {
            boxShadow: "0 0 0 0 #25D366",
          },
          "100%": {
            boxShadow: "0 0 0 25px rgba(255, 0, 0, 0)",
          },
        },
        opacityNormal: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rightToLeft: {
          from: { transform: "translate(0)" },
          to: { transform: "translate(-85vw)" },
        },
        leftToRight: {
          from: { transform: "translate(-85vw)" },
          to: { transform: "translate(0)" },
        },
        arrowHome: {
          "0%": { transform: "translate(0,-10px) rotate(45deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": {
            transform: "translate(0,10px) rotate(45deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "right-roll": "leftToRight infinite alternate 180s linear",
        "left-roll": "rightToLeft infinite alternate 180s linear",
        "arrow-scroll": "arrowHome 3s ease-in-out infinite",
        opacity: "opacity 2s ease-in-out infinite",
        "opacity-normal": "opacityNormal 1s ease-in-out",
        "pulse-border": "pulseBorder 2s infinite",
      },
    },
    fontFamily: {
      "blue-dream": "var(--font-blue-dream)",
      "work-sans": "var(--font-work-sans)",
      "bardon-stamp": "var(--font-bardon-stamp)",
      "bardon-clean": "var(--font-bardon-clean)",
    },
  },
  plugins: [],
};
export default withMT(config);
