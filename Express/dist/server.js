"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
let server;
const port = 5000;
const bootstrap = async () => {
    server = app_js_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map