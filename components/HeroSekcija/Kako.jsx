import { Text, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import prvi from "../../assets/prvi.png";
import drugi from "../../assets/drugi.png";
import treci from "../../assets/treci.png";
import cetvrti from "../../assets/cetvrti.png";

const Kako = () => {
  return (
    <Center>
      <Box w="75%" pb={8}>
        <Box p={1}>
          <Text fontSize="3xl" textAlign="center" fontWeight="600">
            Kako nas sistem fukncionise?
          </Text>
          <Text fontSize="1xl" textAlign="center">
            Rezervisite automobil u par jednostavnih koraka.
          </Text>
        </Box>
        <Box d="flex" flexDirection="row">
          <Box w="25%">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={prvi} width={200} height={200}></Image>
            </div>
            <Text fontWeight="700" textAlign="center">
              Pronadji vozilo koje ti odgovara
            </Text>
          </Box>
          <Box w="25%">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={drugi} width={200} height={200}></Image>
            </div>
            <Text fontWeight="700" textAlign="center">
              Selektuj datum preuzimanja i vracanja vozila
            </Text>
          </Box>
          <Box w="25%">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={treci} width={200} height={200}></Image>
            </div>
            <Text textAlign="center" fontWeight="700">
              Sacekaj potvrdu poslodavca
            </Text>
          </Box>
          <Box w="25%">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={cetvrti} width={200} height={200}></Image>
            </div>
            <Text textAlign="center" fontWeight="700">
              Gotovo!
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Kako;
