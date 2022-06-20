import express from "express";
import userRouter from "./userRoute";
import invoiceRouter from "./invoiceRoute"

const router = express.Router();

function rootRouter() {
  router.use("/user", userRouter());
  router.use("/invoice", invoiceRouter());
  
  return router;
}

export default rootRouter;
