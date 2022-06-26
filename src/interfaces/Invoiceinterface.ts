import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface Invoice extends Document {
  clientName: string;
  email: string;
  services: Schema.Types.ObjectId[]
  description: string;
  dueDate: Date;
  amount: number
}

export {
    Invoice,
};
