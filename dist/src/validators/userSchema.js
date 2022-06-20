"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.AddUserSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var AddUserSchema = joi_1.default.object({
    fullname: joi_1.default.string().min(3).required(),
    username: joi_1.default.string().min(3),
    email: joi_1.default.string().lowercase().email().required(),
    password: joi_1.default.string().min(6).required(),
    address: joi_1.default.string().min(6).required(),
});
exports.AddUserSchema = AddUserSchema;
var LoginSchema = joi_1.default.object({
    email: joi_1.default.string().lowercase().email().required(),
    password: joi_1.default.string().min(6).required(),
});
exports.LoginSchema = LoginSchema;
