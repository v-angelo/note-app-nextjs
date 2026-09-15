import mongoose from "mongoose";

import { initDNS } from "@/lib/initDNS";

initDNS();

const connectionString = process.env.MONGODB_CS as string;

if (!connectionString) {
  throw new Error("MONGODB ConnectionString is not defined");
}

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(connectionString);

    // console.log(response);

    console.log("DB Connection Successfull!!");
  } catch (err) {
    console.log(err);

    console.log("DB Connection Failed!!");
  }
};
