import Joi from "joi";
import constants from "../config/constants";


const AddUserSchema = Joi.object({
  fullname: Joi.string().min(3).required(),
  username: Joi.string().min(3),
  email: Joi.string().lowercase().email().required(),
  password: Joi.string().min(6).required(),

});


export {
  AddUserSchema,
  
};
