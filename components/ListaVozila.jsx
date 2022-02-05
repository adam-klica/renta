import {
  Box,
  Select,
  Image,
  Text,
  Center,
  Button,
  Input,
  FormControl,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import classes from "./Header.module.css";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";

const ListaVozila = (props) => {
  const [drzava, setDrzava] = useState("");
  const [grad, setGrad] = useState("");
  const [cijenaMin, setCijenaMin] = useState(1);
  const [cijenaMax, setCijenaMax] = useState(200);
  const [pretraga, setPretraga] = useState(false);
  const [indikator, setIndikator] = useState(0);

  const pretragaHendler = () => {
    setPretraga(true);
  };

  return (
    <Box>
      <Text fontSize="3xl" textAlign="center" fontWeight="300" p={4}>
        Detaljna pretraga
      </Text>
      <Center bg="blue.200" p={2}>
        <Box d="flex" bg="white" m={2} borderRadius="15px">
          <FormControl isRequired>
            <Select
              placeholder="Izaberi Drzavu"
              borderRadius="15px"
              onChange={(e) => {
                setDrzava(e.target.value);
              }}
            >
              <option value="cg">Crna Gora</option>
              <option value="srb">Srbija</option>
              <option value="bih">Bosna i Hercegovina</option>
              <option value="hr">Hrvatska</option>
            </Select>
          </FormControl>
        </Box>
        <Box d="flex" bg="white" m={2} borderRadius="15px">
          {drzava === "cg" && (
            <FormControl>
              <Select
                placeholder="Izaberi Grad"
                borderRadius="15px"
                onChange={(e) => {
                  setGrad(e.target.value);
                }}
              >
                <option>Podgorica</option>
                <option>Niksic</option>
                <option>Pljevlja</option>
                <option>Bijelo Polje</option>
                <option>Cetinje</option>
                <option>Bar</option>
                <option>Herceg Novi</option>
                <option>Berane</option>
                <option>Budva</option>
                <option>Ulcinj</option>
                <option>Tivat</option>
                <option>Rozaje</option>
                <option>Kotor</option>
                <option>Danilovgrad</option>
                <option>Mojkovac</option>
                <option>Plav</option>
                <option>Kolasin</option>
                <option>Zabljak</option>
                <option>Pluzine</option>
                <option>Andrijevica</option>
                <option>Savnik</option>
              </Select>
            </FormControl>
          )}
          {drzava === "srb" && (
            <Select
              placeholder="Izaberi Grad"
              borderRadius="15px"
              onChange={(e) => {
                setGrad(e.target.value);
              }}
            >
              <option>Beograd</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Pristina</option>
              <option>Kragujevac</option>
              <option>Leskovac</option>
              <option>Subotica</option>
              <option>Zrenjanin</option>
              <option>Pancevo</option>
            </Select>
          )}
          {drzava === "hr" && (
            <Select
              placeholder="Izaberi Grad"
              borderRadius="15px"
              onChange={(e) => {
                setGrad(e.target.value);
              }}
            >
              <option>Zagreb</option>
              <option>Split</option>
              <option>Rijeka</option>
              <option>Osijek</option>
              <option>Zadar</option>
              <option>Velika Gorica</option>
              <option>Slavonski Brod</option>
              <option>Pula - Pola</option>
              <option>Karlovac</option>
            </Select>
          )}
          {drzava === "bih" && (
            <Select
              placeholder="Izaberi Grad"
              borderRadius="15px"
              onChange={(e) => {
                setGrad(e.target.value);
              }}
            >
              <option>Sarajevo</option>
              <option>Banja Luka</option>
              <option>Tuzla</option>
              <option>Zenica</option>
              <option>Mostar</option>
              <option>Bihac</option>
              <option>Brcko</option>
              <option>Bijeljina</option>
              <option>Prijedor</option>
            </Select>
          )}
        </Box>
        <Box m={2} bg="white" borderRadius="15px" w="12%">
          <Input
            textAlign="center"
            placeholder="Minimalna Cijena"
            borderRadius="15px"
            onChange={(e) => setCijenaMin(e.target.value)}
          ></Input>
        </Box>
        <Box m={2} bg="white" borderRadius="15px" w="12%">
          <Input
            textAlign="center"
            placeholder="Maksimalna Cijena"
            borderRadius="15px"
            onChange={(e) => setCijenaMax(e.target.value)}
          ></Input>
        </Box>
        <Button m={2} onClick={pretragaHendler} size="lg">
          <FcSearch /> Pretraga
        </Button>
      </Center>

      <Center>
        <Box p={10} w="90%">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {pretraga == true &&
              props.auta.map((auto) => {
                if (
                  auto.verified !== "false" &&
                  auto.drzava == drzava &&
                  auto.grad == grad &&
                  parseInt(cijenaMin) <= parseInt(auto.cijena) &&
                  parseInt(cijenaMax) >= parseInt(auto.cijena)
                ) {
                  indikator = indikator + 1;
                  return (
                    <GridItem rowSpan={3}>
                      <Box
                        maxW="sm"
                        borderWidth="5px"
                        borderRadius="15px"
                        overflow="hidden"
                        mr={10}
                        className={classes.voziloBox}
                      >
                        <Box>
                          <Image
                            src={auto.slika}
                            alt={auto.naziv}
                            width={500}
                            height={250}
                          ></Image>
                          <Box
                            bgGradient="linear(to-l,#00aacc, #31319c )"
                            p={1}
                          >
                            <Text
                              color="white"
                              textAlign="center"
                              fontSize="2xl"
                              fontWeight="500"
                              style={{ display: "inline" }}
                            >
                              <Text>{auto.naziv}</Text>
                            </Text>
                          </Box>
                        </Box>
                        <Box bg="gray.200">
                          <Box p={1}>
                            <Text textAlign="center" fontSize="xl">
                              Drzava: {auto.drzava.toUpperCase()}
                            </Text>
                            <Text textAlign="center" fontSize="xl">
                              Grad: {auto.grad}
                            </Text>
                          </Box>
                          <Box p={1}>
                            <Text
                              textAlign="center"
                              fontSize="3xl"
                              fontWeight="300"
                            >
                              Cijena po danu:{" "}
                              <Text
                                fontWeight="600"
                                style={{
                                  fontStyle: "italic",
                                  display: "inline",
                                }}
                              >
                                {auto.cijena}€
                              </Text>
                            </Text>
                          </Box>
                        </Box>

                        <Center p={5}>
                          <Button size="lg" color="white" colorScheme="blue">
                            Rezervisi
                          </Button>
                        </Center>
                      </Box>
                    </GridItem>
                  );
                } else {
                }
              })}
            {indikator === 0 && pretraga === true && (
              <Box bg="red.600" p={5} borderRadius="15px" mt={10}>
                <Text color="white" fontSize="2xl">
                  <FcAbout style={{ display: "inline" }} /> Zao nam je, ali nema
                  vozila po izabranim parametrima!{" "}
                </Text>
              </Box>
            )}
            {pretraga == false &&
              props.auta.map((auto) => {
                if (auto.verified !== "false") {
                  console.log(auto);
                  return (
                    <Box
                      maxW="sm"
                      borderWidth="5px"
                      borderRadius="15px"
                      overflow="hidden"
                      mr={10}
                      className={classes.voziloBox}
                    >
                      <Box>
                        <Image
                          src={auto.slika}
                          alt={auto.naziv}
                          width={500}
                          height={250}
                        ></Image>
                        <Box bgGradient="linear(to-l,#00aacc, #31319c )" p={1}>
                          <Text
                            color="white"
                            textAlign="center"
                            fontSize="2xl"
                            fontWeight="500"
                            style={{ display: "inline" }}
                          >
                            <Text>{auto.naziv}</Text>
                          </Text>
                        </Box>
                      </Box>
                      <Box bg="gray.200">
                        <Box p={1}>
                          <Text textAlign="center" fontSize="xl">
                            Drzava: {auto.drzava.toUpperCase()}
                          </Text>
                          <Text textAlign="center" fontSize="xl">
                            Grad: {auto.grad}
                          </Text>
                        </Box>
                        <Box p={1}>
                          <Text
                            textAlign="center"
                            fontSize="3xl"
                            fontWeight="300"
                          >
                            Cijena po danu:{" "}
                            <Text
                              fontWeight="600"
                              style={{
                                fontStyle: "italic",
                                display: "inline",
                              }}
                            >
                              {auto.cijena}€
                            </Text>
                          </Text>
                        </Box>
                      </Box>

                      <Center p={5}>
                        <Button size="lg" color="white" colorScheme="blue">
                          Rezervisi
                        </Button>
                      </Center>
                    </Box>
                  );
                }
              })}
          </Grid>
        </Box>
      </Center>
    </Box>
  );
};

export default ListaVozila;
