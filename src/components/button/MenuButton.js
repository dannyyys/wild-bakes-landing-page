import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaClipboardList } from "react-icons/fa";

const MotionButton = motion(Button);

export const MenuButton = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1zavfJ5e9pWyX6CXX7sCCB5jZkN64o_Fj/view"
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <MotionButton
        backgroundColor="#844b55"
        rightIcon={<FaClipboardList />}
        textColor="white"
        fontSize="xl"
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
        Our Menu
      </MotionButton>
    </Link>
  );
};
