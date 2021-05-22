import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarousel } from "./IntroCarousel";

export const Intro = () => {
  return (
    <Box align="center" paddingTop="10vh">
      <Flex direction={["column", "row"]} width="70vw" align="center">
        <Flex direction="column" align="center">
          <Image src="intro.png" boxSize="300" />

          <Box color="white" fontSize="35">
            Home Bakery Based In Singapore
          </Box>
        </Flex>
        <Spacer />
        <IntroCarousel />
      </Flex>
    </Box>
  );
};
