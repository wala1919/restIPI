const express = require("express")
const app = express()
const mongoose = require("mongoose")



const dotenv =require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("data base connected"))




app.use(express.json())
app.use("/api",require("./routes/productRoute"))


const PORT = 5001
app.listen(PORT,()=> console.log("my server is running on port",PORT))