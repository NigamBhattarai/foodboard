const orderModel = require("../models/order.model");
const orderDetailsModel = require("../models/orderDetail.model");
require("../models/couponDetail.model");
require("../models/addon.model");
require("../models/variant.model");
require("../models/food.model");

exports.getAllOrderDetails = (req, res) => {
  orderDetailsModel
    .find({})
    .sort({ createdAt: -1 })
    .exec((err, result) => {
      console.log(result);
      res.send(result);
    });
};

exports.getAllOrders = (req, res) => {
  orderModel
    .find({})
    .lean()
    .sort({ createdAt: -1 })
    .populate("coupon_details")
    .exec(async (err, result) => {
      if (result) {
        for (var i = 0; i < result.length; i++) {
          result[i].foodItems = await orderDetailsModel
            .find({ order: result[i]._id })
            .populate("addons")
            .populate({ path: "variant", populate: { path: "food" } })
            .exec();
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};
