import express from "express";
import appResponse from "../../lib/appResponse";
import constants from "../config/constants";
import { AuthRequest } from "../interfaces/UtilInterfaces";
import invoiceService from "../services/invoiceService";

class UserCtrl {
  async createInvoice(req: AuthRequest, res: express.Response) {
   const { fullname, address, email} = req.user!
   req.body.user = {
       name: fullname,
       address,
       email
   }
    const response = await invoiceService.createInvoice(req.body);
    res.status(201).send(appResponse(constants.MESSAGES.CREATED, response));
  }

  async getAll(req: express.Request, res: express.Response) {

    const response = await invoiceService.getAllInvoice();
    res.status(200).send(appResponse(constants.MESSAGES.FETCHED, response));
  }

 
}

export default new UserCtrl();
