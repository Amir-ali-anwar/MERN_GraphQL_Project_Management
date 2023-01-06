import mongoose from "mongoose";
const connectDB = (url) => {
  try {
    console.log("MongoDB connected Successfully");
    return mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;
