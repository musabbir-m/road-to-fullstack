import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {

    try {
        const data = await Mango.create(req.body);

        res.send({
            success: true,
            message: "mango created successfully",
            data
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Error happened",
            error
        })
    }

}

const allMango = async (req: Request, res: Response) => {

    try {
        const data = await Mango.find()
        res.send({
            success: true,
            message: "Manngo getting successfully",
            data
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Error happened",
            error
        })
    }
}

const getMangoById = async (req: Request, res: Response) => {

    try {
        const mangoId = req.params.mangoId
        const data = await Mango.findById(mangoId)
        res.send({
            success: true,
            message: "Mango found",
            data
        }
        )
    } catch (error) {
        res.send({
            success: false,
            message: "Mango not found",
            error
        })
    }
}


const updateMangoById = async (req: Request, res: Response) => {
      try {
        const mangoId = req.params.mangoId
        const data = await Mango.findByIdAndUpdate(mangoId, req.body, 
            {new:true,
            runValidators:true

            });

        res.send({
            success: true,
            message: "Mnago Updated successfully",
            data,
        }
        )
     } catch (error) {

        res.send(
            {
                success: false,
                message: "Mango not updated",
                error
            }
        )

      }
    }

    const deleteMangoById= async (req:Request, res: Response)=>{
        const mangoId= req.params.mangoId;

        const data= await Mango.findByIdAndDelete(mangoId)

        res.send(
            {
                success: true,
                message: "Mango deleted successfully",
                data
            }
        )
    }
   
export const mangoController = {
        createMango,
        allMango,
        getMangoById,
        updateMangoById,
        deleteMangoById
    }
