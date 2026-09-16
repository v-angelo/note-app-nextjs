import { timeStamp } from "console";
import mongoose from "mongoose";

export interface Inote {
  title: string;
  description: string;
  color: string;
  userMail: string;
}

const noteSchema = new mongoose.Schema<Inote>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    userMail: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.notes ||
  mongoose.model<Inote>("notes", noteSchema);
