let mongoose = require("mongoose");

let packageSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    price: {type: Number},
    money_saved: {type: Number},
    last_date: {type:Date},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
    variants: [{type:mongoose.Schema.Types.ObjectId, ref: "variant"}],
});

module.exports = mongoose.model("package", packageSchema);
