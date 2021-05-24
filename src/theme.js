import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Cinzel",
  body: "Cinzel",
};

const theme = extendTheme({
  fonts,
  colors: {
    background: '#E9E3D9',
    primary: '#253F4E',
    secondary: '#844b55',
    secondaryBackground: '#905d66',
  }
});

export default theme;
