import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface AUser extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  about: string;
  role: "user" | "client";
  services: object[]
  address: string;
  _doc?: any;
  avatar: AImage;
}


interface UserLogin {
  email: string;
  password: string;
}
interface IService {
  user: Schema.Types.ObjectId ;
  service: object;
  price : number;
}


export {
  AUser,
  UserLogin,
  IService,
};
