"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var constants_1 = __importDefault(require("../config/constants"));
var UserSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    about: {
        type: String,
        default: "",
    },
    avatar: {
        url: {
            type: String,
            default: "",
        },
        public_id: {
            type: String,
            default: "",
        },
    },
}, { timestamps: true });
var UserModel = (0, mongoose_1.model)(constants_1.default.DB_COLLECTION.USER, UserSchema);
exports.default = UserModel;
