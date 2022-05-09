const categoryModel = require("../models/category.model");
const foodModel = require("../models/food.model");

exports.getAllCategories = (req, res) => {
  categoryModel
    .find({})
    .lean()
    .exec(async (err, result) => {
      if (result) {
          for(var i = 0; i < result.length; i ++) {
            const foodCount = await foodModel.count({category:result[i]._id});
            result[i].foodCount = foodCount;
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};
