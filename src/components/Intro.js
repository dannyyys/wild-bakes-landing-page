import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarouselLib } from "./IntroCarouselLib";

export const Intro = () => {
  return (
    <Box align="center" marginTop="10">
      <Flex direction={["column", "row"]} width="70vw" align="center">
        <Image src="intro.png" boxSize="auto" />

        <Spacer />

        <Box marginTop={[10, 0]}>
          <IntroCarouselLib />
        </Box>
      </Flex>
    </Box>
  );
};
