let mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    category_name: {type: String},
    image: {type: String},
    status: {type: Boolean},
    createdAt: {type:Date, default:Date.now()},
    updatedAt:{type:Date, default:Date.now()},
});

module.exports = mongoose.model("category", categorySchema);
