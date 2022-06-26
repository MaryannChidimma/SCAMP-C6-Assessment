import { BadRequestError, NotFoundError } from "../../lib/appError";
import InvoiceModel from "../models/invoiceModel";
import constants from "../config/constants";
import { encryptData} from "../utility/dataCrypto"
import bcrypt from "bcrypt"
import { Invoice } from "../interfaces/Invoiceinterface";
const { MESSAGES } = constants


class ClientServices {
  async requestService() {
    
  }

  async saveClientDetails() {
    
  }
  async createInvoice (data: Invoice) {
      const newUser = await InvoiceModel.create(data);
      return newUser;
  }

 async getAllInvoice (){
     const invoices = await InvoiceModel.find();
     return invoices
 }
async sendInvoice(email: string,  data: any ){
    
}
  

  }


export default new ClientServices();
