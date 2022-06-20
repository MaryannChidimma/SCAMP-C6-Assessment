"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var invoiceController_1 = __importDefault(require("../controllers/invoiceController"));
var auth_1 = require("../middlewares/auth");
var router = express_1.default.Router();
var validators_1 = require("../validators");
var invoiceSchema_1 = require("../validators/invoiceSchema");
function userRouter() {
    router.post("/", auth_1.authenticate, (0, auth_1.hasRole)(["user"]), (0, validators_1.Validator)(invoiceSchema_1.InvoiceSchema, "body"), invoiceController_1.default.createInvoice);
    return router;
}
exports.default = userRouter;
