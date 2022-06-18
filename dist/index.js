"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var constants_1 = __importDefault(require("./src/config/constants"));
var database_1 = __importDefault(require("./src/config/database"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var errorHandler_1 = require("./src/middlewares/errorHandler");
var routes_1 = __importDefault(require("./src/routes"));
require('express-async-errors');
var app = (0, express_1.default)();
var port = constants_1.default.PORT || 8000;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/v1", (0, routes_1.default)());
app.use("/", function (req, res) {
    res.status(200).sendFile(path_1.default.resolve("public", "index.html"));
});
app.use(errorHandler_1.ErrorMiddleware);
app.listen(port, function () {
    (0, database_1.default)();
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});
app.on("error", function (error) {
    console.log("Error occured on the server ".concat(error));
});
