let mongoose = require("mongoose");

let foodSchema = new mongoose.Schema({
    name: {type: String},
    code: {type: String},
    desc:{type:String},
    veg:{type:Boolean},
    image: {type: String},
    status: {type: Boolean},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    category: {type:mongoose.Schema.Types.ObjectId, ref: "category"},
});

module.exports = mongoose.model("food", foodSchema);
