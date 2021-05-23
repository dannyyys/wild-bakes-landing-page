import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import { TopSellerCarousel } from "./TopSellerCarousel";

export const TopSellers = () => {
  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="md" textColor="#F8F5ED" fontWeight="light">
        Our Top Sellers
      </Heading>

      <TopSellerCarousel />
    </Box>
  );
};
