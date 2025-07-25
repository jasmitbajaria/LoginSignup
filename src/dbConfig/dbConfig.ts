import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error", err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong!", error);
  }
}
