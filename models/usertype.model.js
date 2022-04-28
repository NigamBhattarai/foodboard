let mongoose = require("mongoose");

let usertypeSchema = new mongoose.Schema({
    alias: {type: String, default:"manager"},
});

module.exports = mongoose.model("usertype", usertypeSchema);
