import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import MainHeader from "../../components/Header";

const MojaVozila = () => {
  const { data: session } = useSession();
  return (
    <Box>
      <MainHeader />
      <Text>Moja Vozila</Text>
    </Box>
  );
};

export default MojaVozila;
