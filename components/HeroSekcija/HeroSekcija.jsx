import { Text, Box } from "@chakra-ui/react";
import mercedes from "../../assets/mercedes.png";
import golf from "../../assets/golf.png";
import Image from "next/image";

const HeroSekcija = () => {
  return (
    <Box d="flex" flexDirection="row" p={10}>
      <Box w="35%">
        <Image src={mercedes} />
      </Box>
      <Box
        w="30%"
        pt="3%"
        bgGradient="linear(to-l,#00aacc, #31319c )"
        borderRadius={100}
      >
        <Text
          color="white"
          fontSize="2xl"
          fontWeight="300"
          justifyContent="center"
          textAlign="center"
        >
          Rentaj automobil po zelji
        </Text>
        <Text
          color="white"
          fontSize="5xl"
          fontWeight="400"
          justifyContent="center"
          textAlign="center"
        >
          Vec Danas!
        </Text>
      </Box>
      <Box w="35%">
        <Image src={golf} />
      </Box>
    </Box>
  );
};
export default HeroSekcija;
