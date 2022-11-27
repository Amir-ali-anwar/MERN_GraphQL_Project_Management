import mongoose from "mongoose";
import validator from "validator";
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide the name"],
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Please provide the email"],
    validate: {
      validator: validator.isEmail,
      message: "Please Provide the valid email format",
    },
  },
  phone: {
    type: String,
    require: [true, "Please enterd the phone no."],
    trim: true,
  },
});
const Client= mongoose.model("Client", ClientSchema);
export default Client