"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFileFromServer = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const appError_1 = require("../../lib/appError");
//adjust how files are stored
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        let dir = process.cwd();
        //Sets destination for fileType
        const imageFormates = [".jpeg", ".png", ".jpg"];
        const musicFormat = [".mp3"];
        if (imageFormates.includes(path_1.default.extname(file.originalname))) {
            dir = dir + `/uploads/images`;
        }
        else if (musicFormat.includes(path_1.default.extname(file.originalname))) {
            dir = dir + `/uploads/music`;
        }
        else {
            dir = dir + `/uploads/otherFiles`;
        }
        fs_1.default.mkdir(dir, { recursive: true }, (err) => cb(err, dir));
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "_" + file.originalname);
    },
});
const fileFilter = function (req, file, callback) {
    const allFileFormat = [".jpeg", ".png", ".jpg", ".xlsx"];
    const fileExtCheck = allFileFormat.includes(path_1.default.extname(file.originalname).toLowerCase());
    if (!fileExtCheck && file.originalname !== "blob") {
        callback(new appError_1.BadRequestError("Image upload failed. Supports only .jpeg, .png, .jpg, .xlsx or blob"), false);
        callback(null, true);
    }
    else {
        callback(null, true);
    }
};
const fileSize = function () {
    const size = 1024 * 1024 * 250;
    return size;
};
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: fileSize(),
    },
    fileFilter: fileFilter,
});
const deleteFileFromServer = (filePath) => {
    fs_1.default.unlinkSync(filePath);
};
exports.deleteFileFromServer = deleteFileFromServer;
exports.default = upload;
