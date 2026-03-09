import express, { Application } from "express"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { type Request, type Response } from "express";
import { json } from "stream/consumers";

const app: Application = express();

app.use(express.json()) //this will parse json data ex. we can get json ffrom post request
//this is a parser as well, and a middleware as well (app.use (express.json() parser)
const filePath = path.join(__dirname, "../db/todo.json")


const todosRouter = express.Router()

app.use("/todos", todosRouter)

todosRouter.get(("/all-todos"), (req: Request, res: Response) => {

  console.log("From Tdodos router")
  const data = fs.readFileSync(filePath, { encoding: "utf-8" })
  res.json(data)
})



app.get("/", (req: Request, res: Response) => {

  res.send("Welcome to Todo")

});

app.get("/todos/:title", (req: Request, res: Response) => {

console.log("From query", req.query) 
console.log ("from param", req.params)


    const data = fs.readFileSync(filePath, { encoding: "utf-8" })
    res.json(data)

})

app.post('/todos/create-todo', (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send('Hello World')

})
export default app;