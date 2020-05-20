const express = require("express")
const mongoose = require("mongoose")

const app = express()
require("./db")
app.use(express.json())
const alienRouter = require("./routes/aliens")
app.use("/aliens",alienRouter)

app.listen(5050,function(){
    console.log("Server is running")
})