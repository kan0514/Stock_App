"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServiceError = handleServiceError;
function handleServiceError(error, source) {
    console.error(`[${source}]`, error);
    return null;
}
