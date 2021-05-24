import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MotionButton = motion(Button);

export const OrderNowButton = (props) => {
  return (
    <Link
      href="https://wa.me/%2B6592225198?text=Hello!%20I%20would%20like%20to%20make%20a%20WILDBAKES%20order!"
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <MotionButton
        backgroundColor="secondary"
        rightIcon={<FaWhatsapp />}
        textColor="background"
        fontSize="xl"
        fontWeight="bold"
        boxShadow="2xl"
        width="full"
        _hover={{
          backgroundColor: "secondaryBackground",
        }}
        padding="7"
        borderRadius="2xl"
        whileHover={{ scale: 1.1 }}
        {...props}
      >
        Order Now
      </MotionButton>
    </Link>
  );
};
