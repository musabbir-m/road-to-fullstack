import express, { Application } from "express"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { type Request, type Response } from "express";
import { json } from "stream/consumers";
import { todosRouter } from "./todos/todos.routes";

const app: Application = express();

app.use(express.json()) //this will parse json data ex. we can get json ffrom post request
//this is a parser as well, and a middleware as well (app.use (express.json() parser)


app.use("/todos", todosRouter ) 




app.get("/", (req: Request, res: Response) => {

  res.send("Welcome to Todo")

});



export default app;