import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { IntroCarouselLib } from "./IntroCarouselLib";

export const TopSellers = () => {
  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="lg" textColor="#F8F5ED" fontWeight="light">
        Our Top Sellers
      </Heading>
      <IntroCarouselLib />
    </Box>
  );
};
