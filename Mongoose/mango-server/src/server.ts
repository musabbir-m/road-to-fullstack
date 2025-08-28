import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send ("I am here on server")
})

app.listen(5000, ()=>{
    console.log("server running ")
})

async function server (){
    try {
        await mongoose.connect(config.database_url as string)

        console.log (` server running on port ${5000}`)
        
    } catch (error) {
        console.log(` server error ${server}`)        
    }
}