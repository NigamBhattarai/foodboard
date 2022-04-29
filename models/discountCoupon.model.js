let mongoose = require("mongoose");

let discountCouponSchema = new mongoose.Schema({
    name: {type: String},
    valid_till: {type: Date},
    description: {type: String},
    isFixed: {type: Boolean},
    value: {type: Number},
    min_order: {type: Number},
    max_users: {type: Number},
    startedAt: {type: Date},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
});

module.exports = mongoose.model("discount_coupon", discountCouponSchema);
