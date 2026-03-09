"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //this will parse json data ex. we can get json ffrom post request
//this is a parser as well, and a middleware as well (app.use (express.json() parser)
const filePath = path_1.default.join(__dirname, "../db/todo.json");
const todosRouter = express_1.default.Router();
app.use("/todos", todosRouter);
todosRouter.get(("/all-todos"), (req, res) => {
    console.log("From Tdodos router");
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json(data);
});
app.get("/", (req, res) => {
    res.send("Welcome to Todo");
});
app.get("/todos/:title", (req, res) => {
    console.log("From query", req.query);
    console.log("from param", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json(data);
});
app.post('/todos/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Hello World');
});
exports.default = app;
//# sourceMappingURL=app.js.map