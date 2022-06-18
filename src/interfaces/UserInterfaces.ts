import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface CreateUserInterace {
  firstname: string;
  lastname: string;
  email: string;
  isVerified: boolean;
  isSocial: boolean;
}

interface AUser extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  about: string;
  avatar: AImage;
}


interface UserLogin {
  email: string;
  password: string;
}


export {
  AUser,
  UserLogin,
  CreateUserInterace,
};
