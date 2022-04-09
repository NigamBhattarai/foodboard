const express = require('express');
const { categories } = require('../data');
const User = require('../models/UserModel');

const userRouter=express.Router()

userRouter.get('/',async(req,res)=>{
    const users=await User.find();
    res.send(users)
})

module.exports=userRouter;