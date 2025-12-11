import localFont from "next/font/local";

// Fontes WOFF2 otimizadas - convertidas automaticamente
export const bardonStamp = localFont({
  src: [
    {
      path: "../../public/fonts/BardonStamp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bardon-stamp",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const bardonClean = localFont({
  src: [
    {
      path: "../../public/fonts/BardonClean-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bardon-clean",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const workSans = localFont({
  src: [
    {
      path: "../../public/fonts/WorkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const blueDream = localFont({
  src: [
    {
      path: "../../public/fonts/BLUEDREAM-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-blue-dream",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});
