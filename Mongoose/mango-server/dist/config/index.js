"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path"); //path comes from node
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") }); //we set the dir of the env file.
exports.default = {
    node_env: process.env.NODE_ENV,
    PORT: process.env.PORT,
    database_url: process.env.DATABASE_URL // Fixed assignment to property syntax
};
//# sourceMappingURL=index.js.map