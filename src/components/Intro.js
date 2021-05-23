import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";

export const Intro = () => {
  return (
    <Box align="center" paddingTop="5">
      <Flex direction="column" width={["full", "70vw"]} justify="center">
        <Box align="center">
          <Image
            src="Bakes For The Wild Souls new logo.png"
            boxSize={["2xs", "auto"]}
          />
        </Box>

        <Center marginTop="10">
          <OrderNowButton />
        </Center>
      </Flex>
    </Box>
  );
};
