const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:String,required:true,unique:true},
    profile_img:{type:String,required:true},
    password:{type:String,required:true},
});

const User=mongoose.model('User',userSchema)
module.exports=User;