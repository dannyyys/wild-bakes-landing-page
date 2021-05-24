import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box width="full" height="full" backgroundColor="background">
      {children}
    </Box>
  );
};
