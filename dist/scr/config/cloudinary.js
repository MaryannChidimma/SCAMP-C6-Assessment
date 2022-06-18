"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromServer = exports.multipleUpload = exports.deleteFromCloud = exports.uploadToCloud = void 0;
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const constants_1 = __importDefault(require("./constants"));
cloudinary_1.default.v2.config({
    cloud_name: constants_1.default.CLOUDINARY.NAME,
    api_key: constants_1.default.CLOUDINARY.API_KEY,
    api_secret: constants_1.default.CLOUDINARY.SECRET_KEY,
});
const uploadToCloud = function (filename) {
    return new Promise((resolve, reject) => {
        cloudinary_1.default.v2.uploader.upload(filename, { folder: "SOJI/Every", resource_type: "auto" }, function (err, result) {
            if (err)
                reject(err);
            if (result)
                resolve(result);
        });
    });
};
exports.uploadToCloud = uploadToCloud;
const deleteFromCloud = function (publicID) {
    return new Promise((resolve, reject) => {
        cloudinary_1.default.v2.uploader.destroy(publicID, function (result) {
            resolve(result);
        });
    });
};
exports.deleteFromCloud = deleteFromCloud;
const multipleUpload = function (filenames) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Promise.all(filenames.map(uploadToCloud));
            return result;
        }
        catch (error) {
            throw error;
        }
    });
};
exports.multipleUpload = multipleUpload;
const deleteFromServer = function (filename) {
    fs_1.default.unlinkSync(filename);
};
exports.deleteFromServer = deleteFromServer;
