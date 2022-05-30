"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(request, response, next) {
    console.log(`hostname: ${request.hostname} method: ${request.method} path: ${request.path}`);
    next();
}
exports.default = logger;
