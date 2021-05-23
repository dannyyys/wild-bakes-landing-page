import { Heading } from "@chakra-ui/react";

import { Layout } from "../components/layout/Layout";
import { Footer } from "../components/Footer";
import { Intro } from "../components/Intro";
import { Testimonials } from "../components/Testimonials";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { TopSellers } from "../components/TopSellers";

const Index = () => {
  return (
    <Layout>
      <Intro />
      <TopSellers />
      <Testimonials />
      <Footer />
    </Layout>
  );
};

export default Index;
