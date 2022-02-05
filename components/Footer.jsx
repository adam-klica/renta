import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box p={3} bg="gray.600" style={{ opacity: "-moz-initial.7" }}>
      <Text color="white" textAlign="center">
        Powered by:
        <Text fontWeight="800" style={{ display: "inline" }}>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mdhmteam.me/"
          >
            MDHM Team
          </a>
        </Text>
      </Text>
    </Box>
  );
};

export default Footer;
