import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";

export const Intro = () => {
  return (
    <Box align="center">
      <Flex direction="column" width={["full", "70vw"]} justify="center">
        <Box align="center">
          <Image src="intro.png" boxSize={["2xs", "auto"]} />
        </Box>

        <Center marginTop="10">
          <OrderNowButton />
        </Center>
      </Flex>
    </Box>
  );
};
