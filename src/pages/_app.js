import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/cinzel";
import "@fontsource/bebas-neue";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
