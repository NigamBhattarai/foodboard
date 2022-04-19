const mongoose = require('mongoose');
const dotenv = require('dotenv');
function connectDB(){
    dotenv.config();
    mongoose.connect("mongodb://localhost:27017/?readPreference=primary&ssl=false",{useUnifiedTopology:true,useNewUrlParser:true})
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