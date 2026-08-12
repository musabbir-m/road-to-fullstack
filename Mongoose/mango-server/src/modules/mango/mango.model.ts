
import { IMango } from "./mango.interface"
import { Schema, model } from "mongoose"

const mangoSchema = new Schema<IMango>({
    name: { type: String, trim: true, required: true },
    variety: { type: String, trim: true, required: true },
    unit: { type: String, enum: ["KG", "TON"], default: "KG", required: true },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    origin: String,
    season: { type: String, enum: ["Summer", "Winter"] },
    
},
{timestamps:true},
)

const  Mango= model<IMango> ("Mango", mangoSchema)

export default Mango