let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String},
    email: {type: String},
    mobile: {type: String},
    profile_image: {type: String},
    password: {type: String},
    lastlogin: {type: Date},
    counter: {type: Number},
    status: {type: Boolean},
    usertype: {type:mongoose.Schema.Types.ObjectId, ref: "usertype"},
});

module.exports = mongoose.model("user", userSchema);
