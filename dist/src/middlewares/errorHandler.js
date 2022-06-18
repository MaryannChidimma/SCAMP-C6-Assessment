"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var mongooseValidationError = mongoose_1.default.Error.ValidationError;
var isProduction = process.env.NODE_ENV === "production";
var appResponse_1 = __importDefault(require("../../lib/appResponse"));
var errorNames = [
    "CastError",
    "JsonWebTokenError",
    "ValidationError",
    "SyntaxError",
    "MongooseError",
    "MongoError",
];
var ErrorMiddleware = function (error, req, res, next) {
    if (error.name === "AppError" || error.isOperational) {
        return res
            .status(error.statusCode)
            .send((0, appResponse_1.default)(error.message, null, false));
    }
    if (error instanceof mongooseValidationError) {
        var errorMessages = Object.values(error.errors).map(function (e) { return e.message; });
        return res
            .status(400)
            .send((0, appResponse_1.default)("validation error occurred check your inputs for corrections", errorMessages, false));
    }
    if (error.hasOwnProperty("name") && error.name === "MongoError") {
        var data = null;
        return res
            .status(400)
            .send((0, appResponse_1.default)("the entry already exist", data, false));
    }
    if (errorNames.includes(error.name)) {
        return res.status(400).send((0, appResponse_1.default)(error.message, null, false));
    }
    // log error
    console.error(error);
    var message = isProduction
        ? "An unexpected error has occured. Please, contact the administrator"
        : error.message;
    return res.status(500).send((0, appResponse_1.default)(message, null, false));
};
exports.ErrorMiddleware = ErrorMiddleware;
