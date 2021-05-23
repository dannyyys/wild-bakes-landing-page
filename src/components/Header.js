import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { OrderNowButton } from "./button/OrderNowButton";

export const Header = () => {
  return (
    <Box backgroundColor="#132C36" boxShadow="2xl" padding="2" align="center">
      <OrderNowButton />
    </Box>
  );
};
