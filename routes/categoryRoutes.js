const express = require('express');
const { categories } = require('../data');
const Category = require('../models/categoryModel');

const categoryRouter=express.Router()

categoryRouter.get('/',async(req,res)=>{
    const categories=await Category.find();
    res.send(categories)
})

module.exports=categoryRouter;