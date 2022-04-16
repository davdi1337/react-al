import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import typography from "./typography";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.800")(props),
      WebkitFontSmoothing: "antialiased",
      TextRendering: "optimizelegibility",
    },
  }),
};

const theme = extendTheme({ styles, ...typography });
export default theme;
