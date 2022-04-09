const express = require('express')
const Category = require('../models/categoryModel');
const data = require('../data');
const User = require('../models/userModel');
const seedRouter=express.Router();

seedRouter.get('/',async(req,res)=>{
    await Category.remove({})
    const createdCategories=await Category.insertMany(data.categories)
    await User.remove({})
    const createdUsers=await User.insertMany(data.users)
    res.send({createdUsers,createdCategories})
})

module.exports=seedRouter;