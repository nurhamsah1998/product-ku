import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function index({ children }: { children: any }) {
  const theme = extendTheme({
    colors: {
      brand: {
        main: "#4299E1",
        secondary: "#EBF8FF",
        success: "#48BB78",
        error: "#F56565",
      },
      breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
      },
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default index;
