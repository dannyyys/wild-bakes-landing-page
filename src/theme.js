import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Cinzel",
  body: "Cinzel",
};

const theme = extendTheme({
  fonts,
  colors: {
    primary: '#E9E3D9',
    secondary: '#844b55',
    secondaryBackground: '#905d66',
    text: '#253F4E',
  }
});

export default theme;
