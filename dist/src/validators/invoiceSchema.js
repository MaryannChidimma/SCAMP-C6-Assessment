"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceSchema = void 0;
var joi_1 = __importDefault(require("joi"));
var InfoSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
    email: joi_1.default.string().lowercase().email().required(),
    address: joi_1.default.string().required()
});
var InvoiceSchema = joi_1.default.object({
    client: InfoSchema.required(),
    description: joi_1.default.string().required(),
    dueDate: joi_1.default.date().required(),
});
exports.InvoiceSchema = InvoiceSchema;
