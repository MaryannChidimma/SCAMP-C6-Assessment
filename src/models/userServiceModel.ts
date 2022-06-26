import { Schema, model, Model } from "mongoose";
import { IService} from "../interfaces/UserInterfaces";
import constants from "../config/constants";

const ServiceSchema = new Schema<IService>(
      {

        user: {
            type: Schema.Types.ObjectId,
            ref: constants.DB_COLLECTION.USER,
            required: true 
        },
        service: {
           name: {
               type: String,
               required: true,
           },

           description: {
               type: String,
               required: true,
           },
          
        },
        price: {
          type: Number,
          required: true,
        },
      },
    
  { timestamps: true }
);


const ServiceModel: Model<IService> = model(constants.DB_COLLECTION.SERVICE, ServiceSchema);

export default ServiceModel;
