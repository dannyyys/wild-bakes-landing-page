import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box width="full" height="full" backgroundColor="#002e42">
      {children}
    </Box>
  );
};
