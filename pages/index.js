import MainHeader from "../components/Header";
import { Box } from "@chakra-ui/react";
import HeroSekcija from "../components/HeroSekcija/HeroSekcija";
import Kako from "../components/HeroSekcija/Kako";
import { useSession } from "next-auth/react";
import { connectToDatabase } from "../lib/mongodb1";
import ListaVozila from "../components/ListaVozila";
import ListaTeskt from "../components/ListaTekst";
import Footer from "../components/Footer";

export default function Home({ cars }) {
  const { data: session } = useSession();
  return (
    <Box>
      <Box bg="gray.200">
        <MainHeader />
        <HeroSekcija />
        <Kako />
      </Box>

      <ListaTeskt />
      <ListaVozila auta={cars} />
      <Footer></Footer>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("cars")
    .find()
    .sort({ _id: 1 })
    .limit(30)
    .toArray();
  const cars = data.map((car) => {
    return {
      idEmail: car.id,
      id: car._id.toString(),
      naziv: car.car,
      drzava: car.country,
      cijena: car.price,
      grad: car.city,
      slika: car.image,
      verified: car.verified,
    };
  });
  return {
    props: { cars },
  };
}
