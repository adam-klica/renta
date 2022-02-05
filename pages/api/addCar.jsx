import connectDB from "../../connectDB";
import Car from "../../model/carModel";

connectDB();

export default async (req, res) => {
  try {
    const { drzava, grad, vozilo, cijena, slika, verifikovan, emailID } =
      req.body;

    const newCar = await new Car({
      country: drzava,
      city: grad,
      car: vozilo,
      price: cijena,
      image: slika,
      verified: verifikovan,
      id: emailID,
    }).save();
    res.status(200).json({ message: "Vozilo dodato." });
  } catch (error) {
    console.log(error);
  }
};
