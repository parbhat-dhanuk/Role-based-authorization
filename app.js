import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./utils/db.js"
config()
const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running inport:${PORT}`)
})