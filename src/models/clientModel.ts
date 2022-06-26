import { Schema, model, Model } from "mongoose";
import  { AClient} from "../interfaces/ClientInterfaces";
import constants from "../config/constants";

const ClientSchema = new Schema<AClient>(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);


const ClientModel: Model<AClient> = model(constants.DB_COLLECTION.USER, ClientSchema);

export default ClientModel;
