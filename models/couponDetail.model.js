let mongoose = require("mongoose");

let couponDetailSchema = new mongoose.Schema({
    discount_code: {type: String},
    max_count: {type: Number},
    count: {type: Number},
    usedDates: {type: Array, default:[]},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    discount_coupon: {type:mongoose.Schema.Types.ObjectId, ref: "discount_coupon"},
});

module.exports = mongoose.model("coupon_detail", couponDetailSchema);
