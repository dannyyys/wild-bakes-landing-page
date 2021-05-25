import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Layout } from "../components/layout/Layout";
import { Footer } from "../components/layout/Footer";
import { Intro } from "../components/introduction/Intro";
import { Testimonial } from "../components/testimonial/Testimonial";
import { Insta } from "../components/Insta";

const MotionBox = motion(Box);

const Index = () => {
  return (
    <Layout>
      <MotionBox
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Intro />
      </MotionBox>

      {/* <TopSellers /> */}
      <Insta />
      <Testimonial />
      <Footer />
    </Layout>
  );
};

export default Index;
