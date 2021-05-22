import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarousel } from "./IntroCarousel";
import { TestimonialCarousel } from "./TestimonialCarousel";

export const Testimonials = () => {
  return (
    <Box align="center" paddingTop="10vh">
      <Flex direction="row" width="70vw" align="center">
        <Flex direction="column" align="center">
          <Image src="intro.png" boxSize="300" />

          <Box color="white" fontSize="35">
            Home Bakery Based In Singapore
          </Box>
        </Flex>
        <Spacer />
        <TestimonialCarousel />
      </Flex>
    </Box>
  );
};
