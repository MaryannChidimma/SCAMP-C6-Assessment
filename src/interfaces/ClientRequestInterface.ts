import { Document, Schema } from "mongoose";
import { AImage,  } from "./UtilInterfaces";

interface IRequestService extends Document {
  client: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  requestService: Schema.Types.ObjectId[];
  status: string;
  dueDate: Date;
  payment: object;
}

export {
    IRequestService
}