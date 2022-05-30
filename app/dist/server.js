"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const info_1 = __importDefault(require("./routers/info"));
const item_1 = __importDefault(require("./routers/item"));
const errors_1 = require("./middlewares/errors");
const notFound_1 = require("./middlewares/notFound");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(logger_1.default);
app.use(express_1.default.json());
app.use("/", info_1.default);
app.use("/item", item_1.default);
app.use(errors_1.errorHandler);
app.use(notFound_1.notFoundHandler);
app.listen(port, () => {
    console.log(`Server runing at http://localhost:${port}`);
});
