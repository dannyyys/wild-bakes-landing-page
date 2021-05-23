import { Box, Flex, Button, Spacer, Image, Heading } from "@chakra-ui/react";
import { IntroCarousel } from "./IntroCarousel";
import { TestimonialCarousel } from "./TestimonialCarousel";

export const Testimonials = () => {
  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="lg" textColor="#F8F5ED" fontWeight="light">
        Ravishing reviews
      </Heading>

      <TestimonialCarousel />
    </Box>
  );
};
