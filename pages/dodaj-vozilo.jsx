import Forma from "../components/DodajVozilo/Forma";
import MainHeader from "../components/Header";
import { useSession } from "next-auth/react";
import { Box, Text } from "@chakra-ui/react";
import Register from "./registracija";
import Login from "./prijava";
const dodajVozilo = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session === null && (
        <Box>
          <MainHeader></MainHeader>
          <Text fontSize="3xl" textAlign="center" mt={5} mb={-5}>
            Registracija ili prijava je obavezna pri objavi vozila!
          </Text>
          <Box display="flex" flexDirection="row">
            <Box w="50%">
              <Register ind={1} />
            </Box>
            <Box w="50%">
              <Login ind={1} />
            </Box>
          </Box>
        </Box>
      )}
      {session != null && (
        <Box>
          <MainHeader></MainHeader>
          <Forma></Forma>
        </Box>
      )}
    </div>
  );
};

export default dodajVozilo;
