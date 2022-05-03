let mongoose = require("mongoose");

let variantSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    price: {type: Number},
    veg: {type: Boolean},
    desc:{type:String},
    sourLevel: {type: Number},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    food: {type:mongoose.Schema.Types.ObjectId, ref: "food"},
});

module.exports = mongoose.model("variant", variantSchema);
