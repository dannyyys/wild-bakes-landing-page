import { Box, Flex, Button, Spacer, Image, Text } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";
import { FaFacebookSquare, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="#1D323E" align="center" marginTop="10">
      <Flex
        direction={["column", "row"]}
        align="baseline"
        paddingBottom="15px"
        paddingTop="15px"
        width="80vw"
        align="center"
        justify="space-between"
      >
        <OrderNowButton />

        <Link
          href="https://www.facebook.com/wildbakesco/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Button
            backgroundColor="#1D323E"
            size="md"
            color="#F8F5ED"
            fontSize="lg"
            leftIcon={<FaFacebookSquare />}
            _hover={{ backgroundColor: "none" }}
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
            backgroundColor="#1D323E"
            size="md"
            color="#F8F5ED"
            fontSize="lg"
            leftIcon={<FaInstagram />}
            _hover={{ backgroundColor: "none" }}
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
            backgroundColor="#1D323E"
            size="md"
            color="#F8F5ED"
            fontSize="lg"
            leftIcon={<FaRegEnvelope />}
            _hover={{ backgroundColor: "none" }}
          >
            Email
          </Button>
        </Link>

        <Text fontSize="xs" color="#F8F5ED">
          WILD BAKES © 2019 - 2021
        </Text>
      </Flex>
    </Box>
  );
};
