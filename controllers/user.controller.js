require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");

exports.login = async (req, res) => {
  const requestedUser = {
    username: req.body.username,
  };
  const loggedInUser = await userModel.findOne(requestedUser);
  var isValid = false;
  if (loggedInUser) {
    await bcrypt
      .compare(req.body.password, loggedInUser.password)
      .then(function (result) {
        isValid = result;
      });
    if (isValid) {
      requestedUser.userid = loggedInUser._id;
      const accessToken = jwt.sign(
        requestedUser,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).send({ accessToken:accessToken, user:{...loggedInUser._doc, password:""} });
    } else {
      console.log("HERE");
      res.sendStatus(406);
    }
  } else {
    res.sendStatus(400);
  }
};
