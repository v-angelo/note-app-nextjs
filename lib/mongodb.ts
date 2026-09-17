import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";

const connectionString = process.env.MONGODB_CS as string;

if (!connectionString) {
  throw new Error("MONGODB ConnectionString is not defined");
}

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(connectionString);

    console.log("DB Connection Successfull!!");
  } catch (err) {
    console.log(err);

    console.log("DB Connection Failed!!");
  }
};
