import { Box, Flex, Button, Spacer, Image, Text } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";
import { FaFacebookSquare, FaInstagram, FaMailBulk } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="#132C36" align="center" boxShadow="2xl">
      <Flex
        direction={["column", "row"]}
        align="baseline"
        paddingBottom="15px"
        paddingTop="15px"
        width="80vw"
        align="center"
      >
        <OrderNowButton />
        <Spacer />
        <Flex direction={["column", "row"]}>
          <Link
            href="https://www.facebook.com/wildbakesco/"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="lg"
              leftIcon={<FaFacebookSquare />}
            >
              Facebook
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/wild.bakes/?fbclid=IwAR0PGI7BiZwa1mlISx8wIxKcwnttVipszwaagkEoiyOPGTPiw-doMSoZyjs"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="lg"
              leftIcon={<FaInstagram />}
            >
              Instagram
            </Button>
          </Link>
          <Link
            href="mailto:enquiries@wild-bakes.com"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="lg"
              leftIcon={<FaMailBulk />}
            >
              Email
            </Button>
          </Link>
        </Flex>
        <Spacer />
        <Text fontSize="lg" color="white">
          WILD BAKES © 2019 - 2021
        </Text>
      </Flex>
    </Box>
  );
};
