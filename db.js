const mongoose = require('mongoose');
const dotenv = require('dotenv');
function connectDB(){
    dotenv.config();
    mongoose.connect(process.env.MONGODB_URI,{useUnifiedTopology:true,useNewUrlParser:true})
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