const orderModel = require("../models/order.model");
const orderDetailsModel = require("../models/orderDetail.model");

exports.getAllOrderDetails = (req, res) => {
    orderDetailsModel.find().sort({createdAt:-1}).exec((result) => {
        console.log(result)
    })
}