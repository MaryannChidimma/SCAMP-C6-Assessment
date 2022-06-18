import express from "express";
import userRouter from "./userRoute";

const router = express.Router();

function rootRouter() {
  router.use("/user", userRouter());
  
  return router;
}

export default rootRouter;
