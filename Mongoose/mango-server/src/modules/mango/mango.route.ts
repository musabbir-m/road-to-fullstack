import { Router
 } from "express";

 import { mangoController } from "./mango.controller";  

 const mangoRoute= Router()

 mangoRoute.post("/",  mangoController.createMango)
 mangoRoute.get("/", mangoController.allMango)
 mangoRoute.get("/:mangoId", mangoController.getMangoById)
 mangoRoute.patch("/:mangoId", mangoController.updateMangoById)
 mangoRoute.delete("/:mangoId", mangoController.deleteMangoById)

 export default mangoRoute 

 

