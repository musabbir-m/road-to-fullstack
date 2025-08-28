import dotenv from "dotenv"
import path from "path" //path comes from node

dotenv.config({path: path.join(process.cwd(), ".env") }) //we set the dir of the env file.

export default {
    node_env: process.env.NODE_ENV,
    PORT: process.env.PORT, 
    database_url: process.env.DATABASE_URL // Fixed assignment to property syntax
}