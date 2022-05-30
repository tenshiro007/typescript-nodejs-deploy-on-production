"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validation(req, res, next) {
    const { id, name, desc } = req.body;
    if (!(id && name && desc)) {
        return res.status(500).send("Please set Item to all field");
    }
    next();
}
exports.default = validation;
