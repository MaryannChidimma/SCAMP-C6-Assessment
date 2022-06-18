"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var appError_1 = require("../../lib/appError");
/**
 *
 * @param schema - The joi validator object schema that entails how the data should look like
 * @param source - The property in the request data that should be validated
 * @returns
 */
var Validator = function (schema, source) {
    return function (req, res, next) {
        var result = schema.validate(req[source]);
        if (result.error) {
            throw new appError_1.BadRequestError(result.error.message);
        }
        next();
    };
};
exports.Validator = Validator;
