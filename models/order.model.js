let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    token_number: {type: String},
    customer_name: {type: String},
    ordered_time: {type: Date},
    status: {type: Boolean},
    completed_time: {type: Date},
    payment: {type: Boolean},
    payment_method: {type: String},
    grand_total: {type: Number},
    coupon_applied: {type: Boolean},
    coupon_details: {type:mongoose.Schema.Types.ObjectId, ref: "coupon_detail"},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()}
});

module.exports = mongoose.model("order", orderSchema);
