import { Box, Flex, Button, Spacer, Image, Text } from "@chakra-ui/react";
import { OrderNowButton } from "../button/OrderNowButton";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="primary" align="center" marginTop="10">
      <Flex
        direction={["column", "row"]}
        align="baseline"
        align="center"
        justify="space-evenly"
      >
        <Button
          backgroundColor="secondary"
          rightIcon={<FaWhatsapp />}
          textColor="background"
          fontSize="md"
          fontWeight="bold"
          boxShadow="2xl"
          width="10rem"
          _hover={{
            backgroundColor: "secondaryBackground",
          }}
          marginTop={["2rem", "1rem"]}
          marginBottom={["none", "1rem"]}
        >
          Order Now
        </Button>
        <Flex direction={["column", "row"]}>
          <Link
            href="https://www.facebook.com/wildbakesco/"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              backgroundColor="transparent"
              size="sm"
              color="background"
              fontSize="sm"
              leftIcon={<FaFacebookSquare />}
              _hover={{ backgroundColor: "none" }}
              marginTop={["1.5rem", 0]}
            >
              Facebook
            </Button>
          </Link>

          <Link
            href="https://www.instagram.com/wild.bakes"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              backgroundColor="transparent"
              size="sm"
              color="background"
              fontSize="sm"
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
              backgroundColor="transparent"
              size="sm"
              color="background"
              fontSize="sm"
              leftIcon={<FaRegEnvelope />}
              _hover={{ backgroundColor: "none" }}
            >
              Email
            </Button>
          </Link>
        </Flex>
        <Text fontSize="xs" color="background">
          WILD BAKES © 2019 - 2021
        </Text>
      </Flex>
    </Box>
  );
};
