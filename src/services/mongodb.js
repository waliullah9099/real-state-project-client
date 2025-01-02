import mongoose from "mongoose";
export async function dbConnect() {
  try {
    // Connect to your MongoDB database here
    const con = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return con;
  } catch (error) {
    console.log(error);
  }
}
