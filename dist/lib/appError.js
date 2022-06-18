"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.DuplicateError = exports.InvalidError = exports.NotFoundError = exports.ExpectationFailedError = exports.ForbiddenError = exports.UnAuthorizedError = exports.InternalServerError = exports.BadRequestError = void 0;
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, statusCode) {
        if (statusCode === void 0) { statusCode = 500; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "AppError";
        _this.statusCode = statusCode;
        _this.isOperational = true;
        _this.date = new Date();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message, statusCode) {
        if (message === void 0) { message = "Bad Request"; }
        if (statusCode === void 0) { statusCode = 400; }
        return _super.call(this, message, statusCode) || this;
    }
    return BadRequestError;
}(AppError));
exports.BadRequestError = BadRequestError;
var InternalServerError = /** @class */ (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message, statusCode) {
        if (message === void 0) { message = "Something wrong happened."; }
        if (statusCode === void 0) { statusCode = 500; }
        return _super.call(this, message, statusCode) || this;
    }
    return InternalServerError;
}(AppError));
exports.InternalServerError = InternalServerError;
var UnAuthorizedError = /** @class */ (function (_super) {
    __extends(UnAuthorizedError, _super);
    function UnAuthorizedError(message, statusCode) {
        if (message === void 0) { message = "Not Authorized access"; }
        if (statusCode === void 0) { statusCode = 401; }
        return _super.call(this, message, statusCode) || this;
    }
    return UnAuthorizedError;
}(AppError));
exports.UnAuthorizedError = UnAuthorizedError;
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message, statusCode) {
        if (message === void 0) { message = "Forbidden"; }
        if (statusCode === void 0) { statusCode = 403; }
        return _super.call(this, message, statusCode) || this;
    }
    return ForbiddenError;
}(AppError));
exports.ForbiddenError = ForbiddenError;
var ExpectationFailedError = /** @class */ (function (_super) {
    __extends(ExpectationFailedError, _super);
    function ExpectationFailedError(message, statusCode) {
        if (message === void 0) { message = "Expected inputs were not supplied"; }
        if (statusCode === void 0) { statusCode = 417; }
        return _super.call(this, message, statusCode) || this;
    }
    return ExpectationFailedError;
}(AppError));
exports.ExpectationFailedError = ExpectationFailedError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message, statusCode) {
        if (message === void 0) { message = "Resource not found"; }
        if (statusCode === void 0) { statusCode = 404; }
        return _super.call(this, message, statusCode) || this;
    }
    return NotFoundError;
}(AppError));
exports.NotFoundError = NotFoundError;
var InvalidError = /** @class */ (function (_super) {
    __extends(InvalidError, _super);
    function InvalidError(message, statusCode) {
        if (message === void 0) { message = "Invalid Input"; }
        if (statusCode === void 0) { statusCode = 422; }
        return _super.call(this, message, statusCode) || this;
    }
    return InvalidError;
}(AppError));
exports.InvalidError = InvalidError;
var DuplicateError = /** @class */ (function (_super) {
    __extends(DuplicateError, _super);
    function DuplicateError(message, statusCode) {
        if (message === void 0) { message = "Duplicate value"; }
        if (statusCode === void 0) { statusCode = 406; }
        return _super.call(this, message, statusCode) || this;
    }
    return DuplicateError;
}(AppError));
exports.DuplicateError = DuplicateError;
