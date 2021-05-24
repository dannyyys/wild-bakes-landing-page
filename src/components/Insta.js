import { Box, Heading } from "@chakra-ui/layout";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

export const Insta = () => {
  const token = process.env.NEXT_PUBLIC_IG_TOKEN;

  return (
    <Box align="center" marginTop="10" width="full">
      <Heading as="h3" size="md" textColor="primary" fontWeight="bold">
        Our Instagram
      </Heading>
      <Box marginTop="5">
        <InstagramFeed token={token} counter="6" />
      </Box>
    </Box>
  );
};
