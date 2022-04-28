const bcrypt = require("bcryptjs");
const UserType = require("./usertype.model");
const User = require("./user.model");
var Database = require("../config/db.config");
var db = Database._connect;

const data = {
  usertype: [
    {
      _id: "5d725a4a7b292f5f8ceff789",
      alias: "manager",
    },
  ],
  user: [
    {
      _id: "5d7a514b5d2c12c7449be045",
      firstname: "Admin",
      lastname: "User",
      username: "admin",
      email: "inigambhattarai@gmail.com",
      mobile: "9846065409",
      profile_image: "/images/user.png",
      password: bcrypt.hashSync("Fo0dBo@rd"),
      lastlogin: Date.now(),
      counter: 0,
      status: true,
      usertype: "5d725a4a7b292f5f8ceff789",
    },
  ],
};

UserType.remove({});
UserType.insertMany(data.usertype);
User.remove({});
User.insertMany(data.user);
