import express from "express";
import appResponse from "../../lib/appResponse";
import constants from "../config/constants";
import { passwordHash} from "../utility/dataCrypto"
import userService from "../services/userService";

class UserCtrl {
  async addUser(req: express.Request, res: express.Response) {

    let userData = req.body;
     userData.password = await passwordHash(userData.password)
     console.log(userData.password)

    const response = await userService.addUser(userData);
    res.status(201).send(appResponse(constants.MESSAGES.USER_CREATED, response));
  }

  async loginUser(req: express.Request, res: express.Response) {
    const loginDetails = req.body;
    const response = await userService.login(loginDetails);
    res.status(200).send(appResponse(constants.MESSAGES.USER_LOGGED, response));
  }

 
}

export default new UserCtrl();
