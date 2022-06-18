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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genUID = exports.passwordHash = exports.decryptData = exports.encryptData = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = __importDefault(require("../config/constants"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var uuid_1 = require("uuid");
/**
 *
 * @param dataToEncrypt This is the data that will encryped
 * @param expirationTime The expiration time in hrs
 */
var encryptData = function (dataToEncrypt, expirationTime, secretKey) {
    if (expirationTime === void 0) { expirationTime = 1; }
    if (secretKey === void 0) { secretKey = constants_1.default.JWT_PUBLIC_KEY; }
    var encryptedData = jsonwebtoken_1.default.sign(dataToEncrypt, secretKey, {
        expiresIn: "".concat(expirationTime, "h"),
    });
    return encryptedData;
};
exports.encryptData = encryptData;
var decryptData = function (tokenToDecrypt, secretKey) {
    if (secretKey === void 0) { secretKey = constants_1.default.JWT_PUBLIC_KEY; }
    var decryptedData = jsonwebtoken_1.default.verify(tokenToDecrypt, secretKey);
    return decryptedData;
};
exports.decryptData = decryptData;
var passwordHash = function (stringToHash) {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.default.hash(stringToHash, 10)];
                case 1:
                    hashedPassword = _a.sent();
                    return [2 /*return*/, hashedPassword];
            }
        });
    });
};
exports.passwordHash = passwordHash;
var genUID = function (len) {
    if (len === void 0) { len = 0; }
    var key = "".concat((0, uuid_1.v4)()).split("-").join("");
    if (len !== 0)
        return key.slice(0, len);
    return key;
};
exports.genUID = genUID;
