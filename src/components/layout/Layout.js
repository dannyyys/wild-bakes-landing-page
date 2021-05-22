import { Container, Flex } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      width="full"
      height="full"
      backgroundColor="#002e42"
    >
      {children}
    </Flex>
  );
};
