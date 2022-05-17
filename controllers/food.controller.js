const foodModel = require("../models/food.model");
const variantModel = require("../models/variant.model");
const addOnModel = require("../models/addon.model");
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
            .lean()
            .exec();
          for (var j = 0; j < result[i].variants.length; j++) {
            result[i].variants[j].addons = await addOnModel
              .find({ variant: result[i].variants[j]._id })
              .lean()
              .exec();
            for (var k = 0; k < result[i].variants[j].addons.length; k++) {
              result[i].variants[j].addons[k].selected = false;
            }
          }
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};
