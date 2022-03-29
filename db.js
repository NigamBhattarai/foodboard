const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/foodboard",{useUnifiedTopology:true,useNewUrlParser:true})
    const connection=mongoose.connection;

    connection.on("connected",()=>{
        console.log("database Connected successfully");
    })
    connection.on("error",()=>{
        console.log("database connection failed");
    })
}

connectDB()

module.exports=mongoose