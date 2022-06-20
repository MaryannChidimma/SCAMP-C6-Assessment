import express from "express";
import invoiceController from "../controllers/invoiceController";
import { authenticate, hasRole } from "../middlewares/auth";
const router = express.Router();
import { Validator } from "../validators";
import {
    InvoiceSchema,
} from "../validators/invoiceSchema";


function userRouter() {
  router.post(
    "/",
    authenticate,
    hasRole(["user"]),
    Validator(InvoiceSchema, "body"),
    invoiceController.createInvoice
  );

  return router;
}

export default userRouter;
