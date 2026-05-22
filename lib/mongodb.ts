import mongoose from "mongoose";

import { initDNS } from "@/lib/initDNS";

initDNS();

const connectionString = process.env.MONGODB_CS as string;

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(connectionString);

    console.log("DB Connection Successful!!");
  } catch (err) {
    console.log("DB Connection Failed!!");
    console.log(err);
  }
};
