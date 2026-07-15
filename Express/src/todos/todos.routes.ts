import express, { response } from 'express';
import fs from "fs";
import path from "path";
import { type Request, type Response } from "express";


const filePath = path.join(__dirname, "../../db/todo.json")

export const todosRouter = express.Router()

todosRouter.get(("/"), (req: Request, res: Response) => {
 console.log("send all todos")
  const data = fs.readFileSync(filePath, { encoding: "utf-8" })
  res.json(data)

})

todosRouter.post('/create-todo', (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send('Hello World')

})

todosRouter.get("/:id", (req:Request, res: Response)=>{
  const id= req.params.id
  console.log(id)
  const {title, body}= req.body
  res.send("Thank you get request with id")
} )
