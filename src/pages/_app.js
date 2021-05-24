import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/cinzel";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Head>
            <title>WILD BAKES</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
