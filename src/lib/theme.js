import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.800")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "'Inter', sans-serif",
  heading: "'Inter', sans-serif",
};
const theme = extendTheme({ config, styles, fonts });
export default theme;
