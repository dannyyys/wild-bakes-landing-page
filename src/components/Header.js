import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { OrderNowButton } from "./button/OrderNowButton";

export const Header = () => {
  return (
    <Box backgroundColor="#132C36" align="center" boxShadow="2xl">
      <Flex
        direction={["column", "row"]}
        align="baseline"
        paddingBottom="15px"
        width="80vw"
        align="center"
      >
        <OrderNowButton />
        <Spacer />
        <Button backgroundColor="#132C36" size="md" color="white" fontSize="25">
          ABOUT
        </Button>
        <Button backgroundColor="#132C36" size="md" color="white" fontSize="25">
          TESTIMONIALS
        </Button>
        <Button backgroundColor="#132C36" size="md" color="white" fontSize="25">
          CONTACT
        </Button>
        <Image src="logo.png" boxSize="100" />
      </Flex>
    </Box>
  );
};
