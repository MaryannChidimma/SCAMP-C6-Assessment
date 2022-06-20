import express from "express";
import userController from "../controllers/userController";
const router = express.Router();
import { Validator } from "../validators";
import {
  AddUserSchema,
  LoginSchema
} from "../validators/userSchema";


function userRouter() {
  router.post(
    "/register",
    Validator(AddUserSchema, "body"),
    userController.addUser
  );

  router.post(
    "/login",
    Validator(LoginSchema, "body"),
    userController.loginUser
  );
  return router;
}

export default userRouter;
