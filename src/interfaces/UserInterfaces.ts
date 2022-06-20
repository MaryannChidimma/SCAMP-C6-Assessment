import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface AUser extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  about: string;
  role: "user" | "client";
  address: string;
  _doc?: any;
  avatar: AImage;
}


interface UserLogin {
  email: string;
  password: string;
}


export {
  AUser,
  UserLogin,
};
