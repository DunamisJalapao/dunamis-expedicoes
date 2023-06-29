import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "820px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const THEME = extendTheme({
  config,
  breakpoints,
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "::-webkit-scrollbar": {
        width: "10px",
        borderRadius: "8px",
      },

      "::-webkit-scrollbar-track": {
        borderRadius: "8px",
        backgroundColor: "#e7e7e7",
      },

      "::-webkit-scrollbar-thumb": {
        width: "10px",
        backgroundColor: "#cacaca",
      },
    },
  },
});

export default THEME;
