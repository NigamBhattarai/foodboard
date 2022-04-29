let mongoose = require("mongoose");

let orderDetailSchema = new mongoose.Schema({
    addon: {type: Boolean},
    final_price: {type: Number},
    qty: {type: Number},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    variant: {type:mongoose.Schema.Types.ObjectId, ref: "variant"},
    order: {type:mongoose.Schema.Types.ObjectId, ref: "order"},
    addons: [{type:mongoose.Schema.Types.ObjectId, ref: "addon"}],
});

module.exports = mongoose.model("order_detail", orderDetailSchema);
