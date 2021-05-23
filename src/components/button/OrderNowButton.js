import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MotionButton = motion(Button);

export const OrderNowButton = () => {
  return (
    <Link
      href="https://wa.me/%2B6592225198?text=Hello!%20I%20would%20like%20to%20make%20a%20WILDBAKES%20order!"
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <MotionButton
        backgroundColor="#844b55"
        rightIcon={<FaWhatsapp />}
        textColor="white"
        fontSize="2xl"
        fontWeight="bold"
        boxShadow="2xl"
        width="full"
        _hover={{
          backgroundColor: "#905d66",
        }}
        padding="7"
        borderRadius="2xl"
        whileHover={{ scale: 1.1 }}
      >
        Order Now
      </MotionButton>
    </Link>
  );
};
