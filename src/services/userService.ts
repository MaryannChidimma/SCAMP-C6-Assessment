import { BadRequestError, NotFoundError } from "../../lib/appError";
import UserModel from "../models/userModel";
import { AUser, UserLogin} from "../interfaces/UserInterfaces"
import constants from "../config/constants";
import { encryptData} from "../utility/dataCrypto"
import bcrypt from "bcrypt"
const { MESSAGES } = constants


class UserServices {
  async addUser(data: AUser) {
    let newUser: any;

      const existingUser = await UserModel.findOne({ email: data.email });
      if (existingUser) throw new NotFoundError(MESSAGES.USER_EXIST);

      newUser = await UserModel.create(data);
      
      // Genrate token
      const token = encryptData( {id: data._id, email: data.email, }, );
      console.log(token)

     let dataToSend = {
      ...newUser._doc,
      token
    };

    // Delete the password field before sending to the backend
    delete dataToSend.password;

    return dataToSend;
  }
  
  async login( loginDetails: UserLogin){

      // Check if the user exists
      const existingUser = await UserModel.findOne({
        email: loginDetails.email,
      });

      if (!existingUser) throw new NotFoundError(MESSAGES.INVALID_CREDENTIALS);
  
      let isMatched = await bcrypt.compare(
        loginDetails.password,
        existingUser.password
      );
  
      if (!isMatched) throw new BadRequestError(MESSAGES.INVALID_CREDENTIALS);
  
      const token = encryptData(
        {
          id: existingUser._id,
          email: existingUser.email,
          role: existingUser.role,
        },
        constants.JWT_USER_LOGIN_EXPIRATION
      );

      const dataToSend = {
        ...existingUser._doc,
        token,
      };
  
      delete dataToSend.password;
  
      return dataToSend;
    }
  
    async getUserById (id: string) {
      return await UserModel.findById(id).lean()
    }
  }


export default new UserServices();
