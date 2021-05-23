import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarouselLib } from "./IntroCarouselLib";

export const Intro = () => {
  return (
    <Box align="center" marginTop="10">
      <Flex
        direction={["column", "row"]}
        width={["full", "70vw"]}
        justify="center"
      >
        <Box align="center">
          <Image src="intro.png" boxSize={["2xs", "auto"]} />
        </Box>

        {/* <Box marginTop={[10, 0]}>
          <IntroCarouselLib />
        </Box> */}
      </Flex>
    </Box>
  );
};
