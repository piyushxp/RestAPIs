const mongoose = require("mongoose")
const url = 'mongodb://localhost/alien'
mongoose.connect(url,{useNewUrlParser:true,  useUnifiedTopology: true })
const con = mongoose.connection

con.on("open",function(){
    console.log("Connected to local Mongo")
})
