import { Box, Heading, Image, Stack } from "@chakra-ui/react";

export const TopSellers = () => {
  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="lg" textColor="#F8F5ED">
        Our Top Sellers
      </Heading>

      <Stack
        direction={["column", "row"]}
        marginTop="10"
        align="center"
        justify="center"
        width="70vw"
        spacing="4"
        marginBottom={[0, -3]}
      >
        <Box boxSize={["3xs", "2xs"]}>
          <Image
            src="ᴄʜᴏᴄᴏʟᴀᴛᴇ ᴄʀᴇᴀᴍ ᴄʜᴏᴜx ᴀᴜ ᴄʀᴀǫᴜᴇʟɪɴ.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
        <Box boxSize={["3xs", "2xs"]}>
          <Image
            src="ʜᴀᴢᴇʟɴᴜᴛ ᴄʜᴏᴄᴏʟᴀᴛᴇ ɢᴀɴᴀᴄʜᴇ ᴛᴀʀᴛᴇ.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
        <Box boxSize={["3xs", "2xs"]}>
          <Image
            src="Choux Au Craquelin.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
        <Box boxSize={["3xs", "2xs"]}>
          <Image
            src="ʜᴀᴢᴇʟɴᴜᴛ ᴄʜᴏᴄᴏʟᴀᴛᴇ ɢᴀɴᴀᴄʜᴇ ᴛᴀʀᴛᴇ.jpg"
            borderRadius="2xl"
            boxShadow="2xl"
          />
        </Box>
      </Stack>
    </Box>
  );
};
