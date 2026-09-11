import mongoose from "mongoose";

import { initDNS } from "@/lib/initDNS";

initDNS();

const connectionString = process.env.MONGODB_CS as string;

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(connectionString);

    console.log(response);

    console.log("DB Connection Successfull!!");
  } catch (err) {
    console.log(err);

    console.log("DB Connection Failed!!");
  }
};
