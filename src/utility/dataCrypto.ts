import jwt from "jsonwebtoken";
import crypto from "crypto";
import constants from "../config/constants";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
/**
 *
 * @param dataToEncrypt This is the data that will encryped
 * @param expirationTime The expiration time in hrs
 */

const encryptData = function (
  dataToEncrypt: object,
  expirationTime: number = 1,
  secretKey: string = constants.JWT_PUBLIC_KEY!
) {
  const encryptedData = jwt.sign(dataToEncrypt, secretKey, {
    expiresIn: `${expirationTime}h`,
  });

  return encryptedData;
};

const decryptData = function (
  tokenToDecrypt: string,
  secretKey: string = constants.JWT_PUBLIC_KEY!
) {
  const decryptedData = jwt.verify(tokenToDecrypt, secretKey!);
  return decryptedData as any;
};

const passwordHash = async function (stringToHash: string) {
  const hashedPassword = await bcrypt.hash(stringToHash, 10);
  return hashedPassword;
};

const genUID = (len = 0) => {
  const key = `${v4()}`.split("-").join("");
  if (len !== 0) return key.slice(0, len);
  return key;
};

export { encryptData, decryptData, passwordHash, genUID};
