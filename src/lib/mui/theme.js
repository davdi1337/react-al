import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  gray: {
    50: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
  },
  blue: {
    50: "#b1caf3",
    100: "#84adec",
    200: "#6e9ee9",
    300: "#588fe5",
    400: "#4280e2",
    500: "#2065D1",
    600: "#1950a5",
    700: "#16458f",
    800: "#123a79",
    900: "#0c254c",
  },
  green: {
    50: "#5fffae",
    100: "#2bff95",
    200: "#12ff88",
    300: "#00f77b",
    400: "#00de6e",
    500: "#00AB55",
    600: "#00783c",
    700: "#005e2f",
    800: "#004522",
    900: "#001209",
  },
  red: {
    50: "#ffe3e3",
    100: "#ffb0b0",
    200: "#ff9696",
    300: "#ff7d7d",
    400: "#ff6363",
    500: "#FF3030",
    600: "#fc0000",
    700: "#e30000",
    800: "#c90000",
    900: "#960000",
  },
  orange: {
    50: "#fff1de",
    100: "#feddab",
    200: "#fed292",
    300: "#fec879",
    400: "#fdbe60",
    500: "#fda92d",
    600: "#f59302",
    700: "#db8402",
    800: "#c27402",
    900: "#905601",
  },
  purple: {
    50: "#ddcdf6",
    100: "#c0a2ef",
    200: "#b18ceb",
    300: "#a276e7",
    400: "#9360e4",
    500: "#7635dc",
    600: "#5e21bd",
    700: "#531da7",
    800: "#481992",
    900: "#331266",
  },
  cyan: {
    50: "#cff4ff",
    100: "#9ce8ff",
    200: "#82e2ff",
    300: "#69dcff",
    400: "#4fd6ff",
    500: "#1CCAFF",
    600: "#00b2e8",
    700: "#009ecf",
    800: "#008bb5",
    900: "#006482",
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.900")(props),
    },
  }),
};

const fonts = {
  body: "'Open Sans', sans-serif",
  heading: "'Open Sans', sans-serif",
};

const theme = extendTheme({ colors, config, styles, fonts });
export default theme;
