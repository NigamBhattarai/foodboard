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

getOneOrder = async (id) => {
  var result = await orderModel
    .findOne({ _id: id })
    .lean()
    .sort({ createdAt: -1 })
    .populate("coupon_details")
    .exec();
  if (result) {
    result.foodItems = await orderDetailsModel
      .find({ order: result._id })
      .populate("addons")
      .populate({ path: "variant", populate: { path: "food" } })
      .exec();
  } else {
    console.log(err);
  }
  return result;
};

exports.getNewTokenNumber = (req, res) => {
  orderModel
    .findOne({})
    .sort("-token_number")
    .exec((err, result) => {
      res.send("" + (Number.parseInt(result.token_number) + 1));
    });
};

exports.addNewOrder = (req, res) => {
  const body = req.body;
  const billItems = body.bill.billItems;
  var order = new orderModel({
    token_number: body.tokenNumber,
    customer_name: body.customerName,
    ordered_time: new Date(),
    status: 0,
    completed_time: null,
    payment: true,
    payment_method: "cash",
    total: body.bill.prices.subTotal,
    grand_total: body.bill.prices.total,
    coupon_applied: false,
    // coupon_details: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  order.save((err, newOrder) => {
    if (err) res.status(400).send(err);
    else {
      var dataToSend = { order: newOrder, orderDetails: [] };
      billItems.forEach((value, index, array) => {
        const addons = [];
        for (var i = 0; i < value.extras.length; i++) {
          addons.push(value.extras[i]._id);
        }
        var orderDetail = new orderDetailsModel({
          addon: value.extras.length > 0,
          final_price: body.itemPrices[index],
          qty: value.count,
          createdAt: new Date(),
          updatedAt: new Date(),
          variant: value.variant._id,
          order: newOrder._id,
          addons: addons,
        });
        orderDetail.save(async (orderDetailErr, newOrderDetail) => {
          if (orderDetailErr) {
            await orderDetailsModel.deleteMany({ order: newOrder._id });
            await orderModel.deleteOne({ _id: newOrderDetail._id });
            res.status(400).send(err);
          } else {
            global.io.emit("newOrder", null);
            dataToSend.orderDetails.push(newOrderDetail);
          }
        });
      });
      res.send(dataToSend);
    }
  });
};

exports.getTotalOrderCount = async (req, res) => {
  var orderCount = await orderModel.count({ status: { $ne: 3 } });
  res.send(orderCount.toString());
};

exports.getTotalRevenue = async (req, res) => {
  console.log("Here");
  var revenue = await orderModel.aggregate([
    { $match: { status: { $ne: 3 } } },
    { $group: { _id: null, revenue: { $sum: "$grand_total" } } },
  ]);
  res.send(revenue[0].revenue.toString());
};

exports.updateStatus = async (req, res) => {
  var order = await orderModel.findOne({ _id: req.body.id });

  if (order !== null) {
    order.status = req.body.status;
    order.updatedAt = new Date();
    try {
      await order.save();
      global.io.emit("updateOrderStatus", null);
      res.status(200).send(await getOneOrder(order._id));
    } catch (error) {
      console.log(error);
    }
  }
};
