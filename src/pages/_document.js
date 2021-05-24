import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="WILD BAKES" />
          <meta name="description" content="Bakes for the wild souls" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="WILD BAKES" />
          <meta property="og:description" content="Bakes for the wild souls" />
          <meta property="og:image" content="seo_image.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="WILD BAKES" />
          <meta
            property="twitter:description"
            content="Bakes for the wild souls"
          />
          <meta property="twitter:image" content="seo_image.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
