import { Box, Flex, Image, Center, Heading } from "@chakra-ui/react";
import { MenuButton } from "../button/MenuButton";
import { OrderNowButton } from "../button/OrderNowButton";

export const Intro = () => {
  return (
    <Box align="center" paddingTop="5">
      <Flex direction="column" width={["full", "70vw"]} justify="center">
        <Box align="center">
          <Image
            borderRadius="full"
            src="adjust.png"
            objectFit="cover"
            boxSize="13rem"
          />
        </Box>

        <Box align="center">
          <Image src="BFTWS Transparent.png" objectFit="cover" marginTop="5" />
        </Box>

        <Center marginTop="10">
          <MenuButton />
        </Center>
        <Center marginTop="5">
          <OrderNowButton />
        </Center>
      </Flex>
    </Box>
  );
};
