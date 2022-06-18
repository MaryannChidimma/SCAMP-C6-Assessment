"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoute_1 = __importDefault(require("./userRoute"));
var router = express_1.default.Router();
function rootRouter() {
    router.use("/user", (0, userRoute_1.default)());
    return router;
}
exports.default = rootRouter;
