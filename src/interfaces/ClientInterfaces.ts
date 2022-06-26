import { Document, Schema } from "mongoose";


interface AClient extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  address: string;
  _doc?: any;
}

interface ClientLogin {
    email: string;
    password: string;
  }
  
  
  
  export {
    AClient,
    ClientLogin,
  }  