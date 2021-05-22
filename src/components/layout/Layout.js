import { Flex } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Flex width="100vw" height="100vh" backgroundColor="#002e42">
      {children}
    </Flex>
  );
};
