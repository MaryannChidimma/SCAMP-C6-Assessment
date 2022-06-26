import { Schema, model, Model } from "mongoose";
import { Invoice } from "../interfaces/Invoiceinterface";
import constants from "../config/constants";
import userRouter from "../routes/userRoute";

const InvoiceSchema = new Schema<Invoice>(
  {
        clientName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
        },
      
    services: [
        {
        type: Schema.Types.ObjectId,
        ref: constants.DB_COLLECTION.SERVICE,
        required: true,
         }
    ],
    description: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true 
    },
  },
  { timestamps: true }
);


const InvoiceModel: Model<Invoice> = model(constants.DB_COLLECTION.INVOICE, InvoiceSchema);

export default InvoiceModel;
