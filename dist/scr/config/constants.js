"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROGRESS_STATUS = void 0;
const constants = {
    APP_NAME: "Soji App",
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DATABASE_URI,
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
    JWT_USER_LOGIN_EXPIRATION: 2,
    // Cloudinary
    CLOUDINARY: {
        NAME: process.env.CLOUDINARY_NAME,
        API_KEY: process.env.CLOUDINARY_API_KEY,
        SECRET_KEY: process.env.CLOUDINARY_SECRET_KEY,
    },
    //User roles
    ROLE: {
        ADMIN: "admin",
        USER: "user",
        AGENT: "agent",
        LIFESTYLE_AGENT: "lifestyle-agent",
    },
    AGENTROLE: {
        HOTEL: "hotel",
        REALESTATE: "real-estate",
    },
    HOTELTYPE: {
        CASINOHOTEL: "casino-hotel",
        RESORTS: "resorts",
        INNS: "inns",
        SUITES: "suite",
        MOTEL: "motel",
    },
    // Compny Emails
    COMPANY_EMAIL: {
        HELP: "vicmanthebest@gmail.com", // Just for demo
    },
    //Redis Configuration
    REDIS_CONFIGURATION: {
        REDIS_PORT: Number(process.env.REDIS_PORT),
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_URL: process.env.REDIS_URL,
        REDIS_TLS_URL: process.env.REDIS_TLS_URL,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    },
    // Email Configuration
    EMAIL_CONFIGURATION: {
        EMAIL_FROM: process.env.EMAIL_FROM,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
        EMAIL_HOST: process.env.EMAIL_HOST || "",
        EMAIL_PORT: Number(process.env.EMAIL_PORT) || 587,
    },
    // The name of all our collections in the database
    DB_COLLECTION: {
        USER: "USER",
        TOKEN: "TOKEN",
        HOTEL: "HOTEL",
        HOTELDETAIL: "HOTELDETAIL",
        HOTELBOOKING: "HOTELBOOKING",
        REAL_ESTATE: "REAL_ESTATE",
        AGENT: "AGENT",
        STORE: "STORE",
        STORE_PRODUCT: "STORE_PRODUCT",
        STORE_CATEGORY: "STORE_CATEGORY",
        SHOPPING_CHECKOUT: "SHOPPING_CHECKOUT",
        REAL_ESTATE_BOOKING: "REAL_ESTATE_BOOKING",
        ACTIVITY: "ACTIVITY",
        LIFESTYLE: "LIFESTYLE",
        LIFESTYLE_SERVICE: "LIFESTYLE_SERVICE",
        LIFESTYLE_SERVICE_REQUEST: "LIFESTYLE_SERVICE_REQUEST",
        LIFESTYLE_CATEGORIES: "LIFESTYLE_CATEGORIES",
        LIFESTYLE_AGENT: "LIFESTYLE_AGENT",
        DELIVERY_FEE: "DELIVERY_FEE",
        PROMOTION: "PROMOTION",
        NOTIFICATION_HISTORY: "NOTIFICATION_HISTORY",
        LIFESTYLE_AGENT_WALLET_HISTORY_MODEL: "LIFESTYLE_AGENT_WALLET_HISTORY_MODEL",
        SUBSCRIBE: "SUBSCRIBE"
    },
    // Investment constants
    MAX_NO_OF_REF_PER_PLAN: 6,
    // Paystack Keys
    PAYSTACK: {
        SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
        PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
        WEBHOOK_IPS: ["52.31.139.75", "52.49.173.169", "52.214.14.220"],
    },
    //flutter wave
    FLUTTER_WAVE: {
        ENDPOINT: process.env.FLUTTERWAVE_ENDPOINT,
        SEC_KEY: process.env.FLUTTER_WAVE_SEC_KEY,
    },
    SMS: {
        API_KEY: process.env.AFRICASTALKING_API,
        USERNAME: process.env.AFRICASTALKING_USERNAME,
    },
    TYPES: {
        VERIFY_PHONE: "verify-phone",
        RESET_PHONE: "reset-phone",
    },
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
        INVALID_TOKEN: "Invalid token",
        INVALID_PASSWORD: "Invalid password",
        TOKEN_VERIFIED: "Token verified successfully",
        OTP_MESSAGE: "Hello, your SOJI verification code is",
        OTP_SENT: "OTP Sent",
        PASSWORD_MISMATCH: "Password mismatch detected",
        PASSWORD_RESET_SUCCESS: "Password reset successful",
        STORE_CREATED: "Store successfully added",
        STORE_UPDATED: "Store successfully updated",
        STORE_DELETED: "Store successfully deleted",
        STORE_FETCHED: "Store fetched",
        CATEGORY_DELETED: "Category successfully deleted",
        PRODUCT_CREATED: "Product successfully added",
        STORE_CATEGORY_CREATED: "Store category successfully added",
        STORE_CATEGORY_FETCHED: "Store category fetched",
        STORE_CATEGORY_UPDATED: "Store category updated",
        STORE_PRODUCT_FETCHED: "Store product fetched",
        STORE_PRODUCT_UPDATED: "Store product updated",
        SHOPPING_DELIVERY_DETAILS: "Shopping delivery details",
        SHOPPING_CHECKOUT_CREATED: "Shopping checkout created successfully",
        SHOPPING_CHECKOUT_FETCHED: "Shopping checkout fetched successfully",
        SHOPPING_CHECKOUT_UPDATED: "Shopping checkout updated successfully",
        TRANSACTION_COMPLETED: "Transaction was completed successfully",
        TRANSACTION_FETCHED: "Transaction fetched successfully",
        TRANSACTION_APPROVED: "Transaction was approved",
        TRANSACTION_DECLINED: "Transaction declined",
        REFUND_COMPLETED: "Transaction refund initiated successfully",
        TRANSACTION_UNSUCCESSFUL: "Transaction was unsuccessful",
        AMOUNT_INCOMPLETE: "Amount paid was not complete",
        CHECKOUT_NOT_FOUND: "Checkout was not found",
        TASK_COMPLETED: "Task completed successfully",
        LIFESTYLE_SERVICE_NOT_FOUND: "Service not found",
        LIFESTYLE_AGENT_NOT_FOUND: "Agent not found",
        LIFESTYLE_CATEGORY_NOT_FOUND: "Category not found",
        DELIVERY_FEE_UPDATED: "Delivery fee updated successfully",
        DELIVERY_FEE_FETCHED: "Delivery fee fetched successfully",
        DELIVERY_FEE_DELETED: "Delivery fee deleted successfully",
        DELIVERY_FEE_NOT_AVAILABLE: "Delivery fee is not available",
        FILE_NOT_FOUND: "File not found",
        TRANSACTION_FUNCTION: (type, message) => {
            if (type == "declined") {
                return `${message} was declined`;
            }
            else if (type == "in-progress") {
                return `${message} was approved`;
            }
            else {
                return `${message} was completed`;
            }
        },
    },
    // Message Bird API
    MESSAGEBIRD_API_KEY: process.env.MESSAGEBIRD_API_KEY,
    MESSAGEBIRD_SMS_FROM: process.env.MESSAGEBIRD_SMS_FROM,
    TERMII_SMS_API_KEY: process.env.TERMII_SMS_API_KEY,
    TERMII_SMS_SENDER_ID: process.env.TERMII_SMS_SENDER_ID,
    // Email Configuration
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    BOOKING_START_HOUR: "08:00",
};
var PROGRESS_STATUS;
(function (PROGRESS_STATUS) {
    PROGRESS_STATUS["InProgress"] = "in-progress";
    PROGRESS_STATUS["Completed"] = "completed";
    PROGRESS_STATUS["Declined"] = "declined";
})(PROGRESS_STATUS = exports.PROGRESS_STATUS || (exports.PROGRESS_STATUS = {}));
exports.default = constants;
