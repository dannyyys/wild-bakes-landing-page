import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export const OrderNowButton = () => {
  return (
    <Button
      backgroundColor="white"
      variant="solid"
      size="lg"
      rightIcon={<FaWhatsapp />}
    >
      Order Now
    </Button>
  );
};
