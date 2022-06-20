import dotenv from 'dotenv';
dotenv.config();
const constants = {
  APP_NAME: "SCAMP-C6-Assessment",
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
  JWT_USER_LOGIN_EXPIRATION: 2,
  
  // The name of all our collections in the database
  DB_COLLECTION: {
    USER: "USER",
    INVOICE: "INVOICE",
    
  },

  // Investment constants

  MAX_NO_OF_REF_PER_PLAN: 6,

  MESSAGES: {
    USER_EXIST: "User already exists",
    USER_CREATED: "User created successfully",
    USER_LOGGED: "User logged in successfully",
    USER_UPDATED: "User updated successfully",
    USER_NOT_EXIST: "User does not exist",
    USER_ACTIVITY_GOTTEN: "User activities gotten successfully",
    ALREADY_EXIST: "Resource already exists",
    CREATED: "Resource created successfully",
    FETCHED: "Resource fetched",
    UPDATED: "Resource updated successfully",
    DELETED: "Resource deleted successfully",
    NOT_FOUND: "Not found",
    INVALID_CREDENTIALS: "Invalid credentials",
    INVALID_PASSWORD: "Invalid password",
    PASSWORD_MISMATCH: "Password mismatch detected",
    PASSWORD_RESET_SUCCESS: "Password reset successful",
  },
}


export default constants;
