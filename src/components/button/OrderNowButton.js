import { Button, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export const OrderNowButton = () => {
  return (
    <Link
      href="https://wa.me/%2B6592225198?text=Hello!%20I%20would%20like%20to%20make%20a%20WILDBAKES%20order!"
      isExternal
    >
      <Button
        backgroundColor="#844b55"
        rightIcon={<FaWhatsapp />}
        textColor="white"
        fontSize="lg"
        fontWeight="bold"
        width="full"
      >
        Order Now
      </Button>
    </Link>
  );
};
