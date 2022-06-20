import { Schema, model, Model } from "mongoose";
import { Invoice } from "../interfaces/Invoiceinterface";
import constants from "../config/constants";
import userRouter from "../routes/userRoute";

const InvoiceSchema = new Schema<Invoice>(
  {
    client: {
        name: {
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
        address: {
            type: String,
            required: true
        },
    },
    user: {
        name: {
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
        address: {
            type: String,
            required: true
        },
    },
    description: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    }
  },
  { timestamps: true }
);


const InvoiceModel: Model<Invoice> = model(constants.DB_COLLECTION.INVOICE, InvoiceSchema);

export default InvoiceModel;
