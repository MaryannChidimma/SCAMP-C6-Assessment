
import Joi from "joi";

const InfoSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().lowercase().email().required(),
    address: Joi.string().required()
})

const InvoiceSchema = Joi.object({
 client: InfoSchema.required(),
  description: Joi.string().required(),
  dueDate: Joi.date().required(),

});

export {
    InvoiceSchema,
  
};
