"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatMessage(objectOrMessage) {
    if (typeof objectOrMessage === "string")
        return objectOrMessage;
    if (typeof objectOrMessage === "object" && objectOrMessage.message) {
        return objectOrMessage.message;
    }
    return "";
}
function createResponse(objectOrMessage, data, success) {
    if (data === void 0) { data = null; }
    if (success === void 0) { success = true; }
    if (data) {
        return {
            success: success === null ? true : success,
            message: formatMessage(objectOrMessage),
            data: data,
        };
    }
    return {
        success: success === null ? true : success,
        message: formatMessage(objectOrMessage),
    };
}
exports.default = createResponse;
