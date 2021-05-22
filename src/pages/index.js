import { Text, Box, Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { Intro } from "../components/Intro";

import { Layout } from "../components/layout/Layout";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { TopSellers } from "../components/TopSellers";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Intro />
      <TopSellers />
      <Box paddingTop="10vh" align="center" fontSize="35" color="white">
        Customers loves WILD BAKES
      </Box>

      {/* <TestimonialCarousel /> */}
      <Footer />
    </Layout>
  );
};

export default Index;
