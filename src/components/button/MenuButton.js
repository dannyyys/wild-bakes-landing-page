import { useState, useEffect } from "react";
import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaClipboardList } from "react-icons/fa";

const MotionButton = motion(Button);

export const MenuButton = () => {
  const [menuURL, setMenuURL] = useState();

  const getMenuID = async () => {
    const response = await fetch("/api/getMenu");
    const responseJSON = await response.json();
    setMenuURL(responseJSON.url);
  };

  useEffect(() => getMenuID(), []);

  return (
    <Link href={menuURL} isExternal _hover={{ textDecoration: "none" }}>
      <MotionButton
        backgroundColor="secondary"
        rightIcon={<FaClipboardList />}
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
      >
        Our Menu
      </MotionButton>
    </Link>
  );
};
