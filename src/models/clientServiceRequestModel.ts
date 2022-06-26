import { Schema, model, Model } from "mongoose";
import constants from "../config/constants";
import { IRequestService } from "../interfaces/clientRequestInterface";

const RequestServiceSchema = new Schema<IRequestService>({


  user: {
      type: Schema.Types.ObjectId,
      ref: constants.DB_COLLECTION.USER,
      required: true,
    },
  
  client: {
      type: Schema.Types.ObjectId,
      ref: constants.DB_COLLECTION.CLIENT,
      required: true,
  },
  requestService: [{
        type: Schema.Types.ObjectId,
        ref: constants.DB_COLLECTION.SERVICE,
        required: true,
      },
    ],
  payment: {
    reference: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      default: 0,
    },
    dueDate: {
      type: String,
      default: "",
    },
    paymentUrl: {
      type: String,
      default: "",
    }
  },
  status: {
    type: String,
    default: null,
    enum: [
      "accepted",
      "in-progress",
      "completed",
      "rejected",
    ],
  },
},
{
  timestamps: true,
}
);

// Used when the clienR

const RequestServiceModel: Model<IRequestService> = model(constants.DB_COLLECTION.REQUEST_SERVICE, RequestServiceSchema);

export default RequestServiceModel;
