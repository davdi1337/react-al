import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// import theme from "./lib/saas/index";
import theme from "./lib/theme";
import muitheme from "./lib/mui/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={muitheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
