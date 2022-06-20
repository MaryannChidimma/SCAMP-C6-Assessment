import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface Invoice extends Document {
  client: Client;
  user: User;
  description: string;
  dueDate: Date;
}

interface Client {
    name: string;
    address: string;
    email: string;
}

interface User {
    name: string;
    address: string;
    email: string;
}



export {
    Invoice,
};
