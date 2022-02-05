import {
  Button,
  Select,
  Center,
  Input,
  Text,
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputStepper,
  FormHelperText,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";

const Forma = () => {
  const [drzava, setDrzava] = useState("cg");
  const [grad, setGrad] = useState("");
  const [vozilo, setVozilo] = useState("");
  const [cijena, setCijena] = useState("15.50");
  const [slika, setSlika] = useState("prazna");
  const [uploadSlike, setUploadSlike] = useState("1");
  const [verifikovan, setVerifikovan] = useState("false");
  const { data: session } = useSession();
  const [emailID, setEmailID] = useState(session.user.email);

  const format = (val) => `€` + val;
  const parse = (val) => val.replace(/^\€/, "");

  const formaHendler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "api/addCar",
        { drzava, grad, vozilo, cijena, slika, verifikovan, emailID },
        config
      );
    } catch (error) {
      console.log(error);
    }
    toast.success("Vozilo je uspjesno dodano. Hvala!");
    setCijena("15.50");
    setDrzava("cg");
    setVozilo("");
  };

  return (
    <Box>
      <Box textAlign="center" p={5}>
        <Text fontSize="3xl">
          Ispuni formu i sacakaj da nas tim provjeri podatke.
        </Text>
        <Text fontWeight="500">Verifikacija ne traje duze od 24h</Text>
      </Box>
      <Center>
        <Box
          bgGradient="linear(to-l,#00aacc, #31319c )"
          w="40%"
          justifyContent="center"
          borderRadius="20px"
        >
          <FormControl>
            <FormLabel htmlFor="country" textAlign="center" color="white">
              Drzava
            </FormLabel>
            <Center>
              <Select
                id="drzava"
                placeholder="Izaberi Drzavu"
                w="80%"
                bg="white"
                onChange={(e) => setDrzava(e.target.value)}
              >
                <option value="cg">Crna Gora</option>
                <option value="srb">Srbija</option>
                <option value="bih">Bosna i Hercegovina</option>
                <option value="hr">Hrvatska</option>
              </Select>
            </Center>

            {drzava === "cg" && (
              <div>
                <FormLabel htmlFor="country" textAlign="center" color="white">
                  Grad
                </FormLabel>
                <Center>
                  <Select
                    id="grad-cg"
                    placeholder="Izaberi Grad"
                    w="80%"
                    bg="white"
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
                </Center>
              </div>
            )}
            {drzava === "srb" && (
              <div>
                <FormLabel htmlFor="country" textAlign="center" color="white">
                  Grad
                </FormLabel>
                <Center>
                  <Select
                    id="grad-srb"
                    placeholder="Izaberi Grad"
                    w="80%"
                    bg="white"
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
                </Center>
              </div>
            )}
            {drzava === "hr" && (
              <div>
                <FormLabel htmlFor="country" textAlign="center" color="white">
                  Grad
                </FormLabel>
                <Center>
                  <Select
                    id="grad-hr"
                    placeholder="Izaberi Grad"
                    w="80%"
                    bg="white"
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
                </Center>
              </div>
            )}
            {drzava === "bih" && (
              <div>
                <FormLabel htmlFor="country" textAlign="center" color="white">
                  Grad
                </FormLabel>
                <Center>
                  <Select
                    id="grad-bih"
                    placeholder="Izaberi Grad"
                    w="80%"
                    bg="white"
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
                </Center>
              </div>
            )}

            <FormLabel textAlign="center" htmlFor="email" color="white">
              Marka i Model Automobila
            </FormLabel>
            <Center>
              <Input
                onChange={(e) => {
                  setVozilo(e.target.value);
                }}
                p={5}
                bg="white"
                w="80%"
                id="automobil"
                variant="flushed"
              />
            </Center>
            <FormHelperText mt="-0.5" textAlign="center" color="white">
              Npr. Audi A4
            </FormHelperText>
            <FormLabel textAlign="center" htmlFor="email" color="white">
              Cijena po danu
            </FormLabel>
            <Center>
              <NumberInput
                onChange={(e) => {
                  setCijena(parse(e));
                }}
                value={format(cijena)}
                max={120}
              >
                <NumberInputField bg="white" variant="flushed" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Center>
            <FormLabel textAlign="center" htmlFor="email" color="white">
              Slika Automobila
            </FormLabel>
            <Center>
              <input
                type="file"
                name="file"
                onChange={async (e) => {
                  toast.loading("Slika se otprema. Molimo sacekajte!", {
                    duration: 3000,
                    position: "top-center",
                    icon: "⚠️",
                    iconTheme: {
                      primary: "blue",
                      secondary: "white",
                    },
                  });
                  setUploadSlike("2");
                  console.log(uploadSlike);
                  const files = e.target.files;
                  const data = new FormData();
                  data.append("file", files[0]);
                  data.append("upload_preset", "lemica");
                  const res = await fetch(
                    "https://api.cloudinary.com/v1_1/diwlupnki/image/upload",
                    {
                      method: "POST",
                      body: data,
                    }
                  );
                  const file = await res.json();
                  console.log(file);
                  setSlika(file.secure_url);
                }}
              />
            </Center>
          </FormControl>
          <Center p={5}>
            {slika === "prazna" && uploadSlike === "1" && (
              <Button
                onClick={formaHendler}
                rightIcon={<ArrowForwardIcon />}
                colorScheme="outline"
                variant="outline"
                color="white"
              >
                Posalji
              </Button>
            )}
            {uploadSlike === "2" && slika === "prazna" && (
              <Button
                isLoading
                onClick={formaHendler}
                rightIcon={<ArrowForwardIcon />}
                colorScheme="outline"
                variant="outline"
                color="white"
              >
                Posalji
              </Button>
            )}
            {slika.slice(0, 4) === "http" && (
              <Button
                onClick={formaHendler}
                rightIcon={<ArrowForwardIcon />}
                colorScheme="outline"
                variant="outline"
                color="white"
              >
                Posalji
              </Button>
            )}
          </Center>
        </Box>
      </Center>
      <Toaster />
    </Box>
  );
};

export default Forma;
