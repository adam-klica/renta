import { Box, Text, Center } from "@chakra-ui/react";

const ListaTeskt = () => {
  return (
    <Box p={5} mt={10} className="davaj">
      <Center>
        <Box
          w="30%"
          bgGradient="linear(to-l,#00aacc, #31319c )"
          borderRadius={100}
        >
          <Text fontSize="6xl" textAlign="center" color="white">
            Lista vozila
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default ListaTeskt;
