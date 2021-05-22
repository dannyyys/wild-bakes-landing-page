import { Box, Flex, Button, Spacer, Image, Text } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";
import { FaFacebookSquare, FaInstagram, FaMailBulk } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="#132C36" align="center" boxShadow="2xl">
      <Flex
        direction="row"
        align="baseline"
        paddingBottom="15px"
        paddingTop="15px"
        width="80vw"
      >
        <OrderNowButton />
        <Spacer />
        <Flex>
          <Link href="https://www.facebook.com/wildbakesco/" isExternal>
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="25"
              leftIcon={<FaFacebookSquare />}
            >
              Facebook
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/wild.bakes/?fbclid=IwAR0PGI7BiZwa1mlISx8wIxKcwnttVipszwaagkEoiyOPGTPiw-doMSoZyjs"
            isExternal
          >
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="25"
              leftIcon={<FaInstagram />}
            >
              Instagram
            </Button>
          </Link>
          <Link href="mailto:enquiries@wild-bakes.com" isExternal>
            <Button
              backgroundColor="#132C36"
              size="md"
              color="white"
              fontSize="25"
              leftIcon={<FaMailBulk />}
            >
              Email
            </Button>
          </Link>
        </Flex>
        <Spacer />
        <Text fontSize="25" color="white">
          WILD BAKES © 2019 - 2021
        </Text>
      </Flex>
    </Box>
  );
};
