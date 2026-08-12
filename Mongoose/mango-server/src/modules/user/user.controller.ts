import { Request, Response } from "express";
import User from "./user.model"

const registerUser= async (req: Request, res: Response)=>{
    const payload= req.body
    const user = new User(payload) //we took payload to recive user data, and save it according to the User model

   const data= await user.save()

    res.send({
        success: true,
        message: "User created successfully",
        data
    })
}

export {registerUser}