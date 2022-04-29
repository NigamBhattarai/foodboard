let mongoose = require("mongoose");

let addonSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    price: {type: Number},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    variant: {type:mongoose.Schema.Types.ObjectId, ref: "variant"},
});

module.exports = mongoose.model("addon", addonSchema);
