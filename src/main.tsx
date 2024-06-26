import App from "@/App.tsx";
import {
  ChakraProvider,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = extendTheme(
  {
    fonts: {
      heading: "SUIT-Regular",
      body: "SUIT-Regular",
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
