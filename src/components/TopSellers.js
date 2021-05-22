import { Box, Flex, Button, Spacer, Image } from "@chakra-ui/react";
import { IntroCarousel } from "./IntroCarousel";

export const TopSellers = () => {
  return (
    <Box align="center" paddingTop="10vh" width="full">
      <Flex direction={["column", "row"]} width="70vw" align="center">
        <Box boxSize="20vw">
          <Image
            src="ᴄʜᴏᴄᴏʟᴀᴛᴇ ᴄʀᴇᴀᴍ ᴄʜᴏᴜx ᴀᴜ ᴄʀᴀǫᴜᴇʟɪɴ.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
        <Spacer />
        <Box boxSize="20vw">
          <Image
            src="ʜᴀᴢᴇʟɴᴜᴛ ᴄʜᴏᴄᴏʟᴀᴛᴇ ɢᴀɴᴀᴄʜᴇ ᴛᴀʀᴛᴇ.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
        <Spacer />
        <Box boxSize="20vw">
          <Image
            src="Choux Au Craquelin.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};
