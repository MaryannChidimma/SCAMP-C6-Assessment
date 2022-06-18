"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controllers/userController"));
var router = express_1.default.Router();
var validators_1 = require("../validators");
var userSchema_1 = require("../validators/userSchema");
function userRouter() {
    router.post("/register", (0, validators_1.Validator)(userSchema_1.AddUserSchema, "body"), userController_1.default.addUser);
    return router;
}
exports.default = userRouter;
