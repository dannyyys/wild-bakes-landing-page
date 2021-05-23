import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarousel } from "./IntroCarousel";
import { IntroCarouselLib } from "./IntroCarouselLib";

export const Intro = () => {
  return (
    <Box align="center" paddingTop="10vh">
      <Flex direction={["column", "row"]} width="70vw" align="center">
        <Flex direction="column" align="center">
          <Image src="intro.png" boxSize="300" />

          <Box color="white" fontSize="2xl">
            Home Bakery Based In Singapore
          </Box>
        </Flex>
        <Spacer />
        {/* <IntroCarousel /> */}
        <IntroCarouselLib />
      </Flex>
    </Box>
  );
};
