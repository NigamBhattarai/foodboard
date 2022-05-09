const foodModel = require("../models/food.model");
const variantModel = require("../models/variant.model");
require("../models/category.model");

exports.getAllFoods = (req, res) => {
    foodModel
      .find({})
      .lean()
      .populate("category")
      .exec(async (err, result) => {
        if (result) {
            for (var i = 0; i < result.length; i++) {
              result[i].variants = await variantModel
                .find({ food: result[i]._id })
                .exec();
            }
            res.send(result);
          } else {
            console.log(err);
            res.send(err);
          }
          });
  };
  
