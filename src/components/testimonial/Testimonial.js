import { Box, Flex, Button, Spacer, Image, Heading } from "@chakra-ui/react";
import { TestimonialCarousel } from "./TestimonialCarousel";

export const Testimonial = () => {
  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="md" textColor="#F8F5ED" fontWeight="light">
        Our customers are saying...
      </Heading>

      <TestimonialCarousel />
    </Box>
  );
};
