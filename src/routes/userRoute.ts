import express from "express";
import upload from "../config/multer";
import userController from "../controllers/userController";
const router = express.Router();
import { Validator } from "../validators";
import {
  AddUserSchema,
} from "../validators/userSchema";


function userRouter() {
  router.post(
    "/register",
    Validator(AddUserSchema, "body"),
    userController.addUser
  );

 
  return router;
}

export default userRouter;
