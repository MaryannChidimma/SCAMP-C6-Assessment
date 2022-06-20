"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var constants_1 = __importDefault(require("../config/constants"));
var InvoiceSchema = new mongoose_1.Schema({
    client: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
        },
        address: {
            type: String,
            required: true
        },
    },
    user: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
        },
        address: {
            type: String,
            required: true
        },
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });
var InvoiceModel = (0, mongoose_1.model)(constants_1.default.DB_COLLECTION.INVOICE, InvoiceSchema);
exports.default = InvoiceModel;
