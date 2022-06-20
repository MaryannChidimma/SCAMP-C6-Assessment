import { Schema, model, Model } from "mongoose";
import { AUser } from "../interfaces/UserInterfaces";
import constants from "../config/constants";

const UserSchema = new Schema<AUser>(
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
    about: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "user",
    }, 
    address: {
      type: String,
      required: true
    },
    avatar: {
      url: {
        type: String,
        default: "",
      },
      public_id: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);


const UserModel: Model<AUser> = model(constants.DB_COLLECTION.USER, UserSchema);

export default UserModel;
