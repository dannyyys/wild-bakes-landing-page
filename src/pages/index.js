import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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
      <Heading as="h3" size="lg" align="center" textColor="#F8F5ED">
        See What Our Customers Are Saying
      </Heading>
      <TestimonialCarousel />
      <Footer />
    </Layout>
  );
};

export default Index;
