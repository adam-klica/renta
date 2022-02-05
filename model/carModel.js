import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  verified: {
    type: String,
  },
  id: {
    type: String,
  },
});

export default mongoose.models.Car || mongoose.model("Car", carSchema);
