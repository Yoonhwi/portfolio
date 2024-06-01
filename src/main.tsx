import App from "@/App.tsx";
import {
  ChakraProvider,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import "@fontsource/open-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

const baseStyle = {
  parts: ["overlay", "dialog"],
  baseStyle: {
    dialog: {
      borderRadius: "md",
      minW: "80vw",
    },
  },
};

const theme = extendTheme(
  {
    // components: {
    //   Drawer: baseStyle,
    // },
    fonts: {
      body: `'Raleway', sans`,
    },
    colors: {
      primary: baseTheme.colors.facebook,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
