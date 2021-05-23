import { Button, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export const OrderNowButton = () => {
  return (
    <Link
      href="https://wa.me/%2B6592225198?text=Hello!%20I%20would%20like%20to%20make%20a%20WILDBAKES%20order!"
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <Button
        backgroundColor="#844b55"
        rightIcon={<FaWhatsapp />}
        textColor="white"
        fontSize="2xl"
        fontWeight="bold"
        width="full"
        _hover={{
          backgroundColor: "#905d66",
        }}
        padding="7"
        borderRadius="2xl"
      >
        Order Now
      </Button>
    </Link>
  );
};
