require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const usertypeModel = require("../models/usertype.model");
const uploadDir = "images/uploads/user/";
const fs = require("fs");

require("../models/usertype.model");

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
      res.status(200).send({
        accessToken: accessToken,
        user: { ...loggedInUser._doc, password: "" },
      });
    } else {
      res.sendStatus(406);
    }
  } else {
    res.sendStatus(400);
  }
};

exports.getUsers = async (req, res) => {
  var users = await userModel.find().lean().populate("usertype").exec();
  for (var i = 0; i < users.length; i++) {
    if (users[i].usertype.alias === "admin") users.splice(i, 1);
  }
  res.send(users);
};

exports.getUserTypes = async (req, res) => {
  var usertypes = await usertypeModel.find().lean().exec();
  for (var i = 0; i < usertypes.length; i++) {
    if (usertypes[i].alias === "admin") usertypes.splice(i, 1);
  }
  res.send(usertypes);
};
exports.assignRole = async (req, res) => {
  userModel.updateOne(
    { _id: req.body.user },
    { $set: { usertype: req.body.role } },
    {},
    (err) => {
      if (err) res.sendStatus(400);
      else res.sendStatus(200);
    }
  );
};
exports.createUser = async (req, res) => {
  var userData = JSON.parse(req.body.textData);
  var userImage = req.files === null ? undefined : req.files.imageFile;
  var isEdit = typeof userData._id !== "undefined";
  if (!fs.existsSync("public/" + uploadDir))
    fs.mkdirSync("public/" + uploadDir, { recursive: true });
  var usertype = await usertypeModel.findOne({ alias: "counter" });
  if (isEdit) {
    var user = await userModel.findOne({ _id: userData._id }).lean();
    if (user !== null) {
      if (
        userData.firstname !== "" &&
        userData.lastname !== "" &&
        userData.email !== "" &&
        userData.username !== "" &&
        userData.mobile !== ""
      ) {
        user.firstname = userData.firstname;
        user.lastname = userData.lastname;
        user.username = userData.username;
        user.email = userData.email;
        user.mobile = userData.mobile;
        user.status = userData.status;
        var pwdErr = false;
        if (userData.password.trim() !== "") {
          if (userData.password.length > 5) {
            user.password = bcrypt.hashSync(userData.password);
          } else {
            pwdErr = true;
            res.sendStatus(405);
          }
        }
        if (!pwdErr) {
          if (typeof userImage !== "undefined") {
            userFilePath = uploadDir + Date.now() + userImage.name;
            var temp_user_profile_image = user.profile_image;
            userImage.mv("public/" + userFilePath, (err) => {
              if (err) {
                res.sendStatus(405);
              } else {
                if (
                  typeof temp_user_profile_image.split(
                    process.env.BASE_URL
                  )[1] !== "undefined"
                )
                  try {
                    fs.unlinkSync(
                      "public/" +
                        temp_user_profile_image.split(process.env.BASE_URL)[1]
                    );
                  } catch (error) {}
              }
            });
            user.profile_image = process.env.BASE_URL + "" + userFilePath;
          }
          user.updatedAt = new Date();
          userModel.updateOne({ _id: user._id }, user, {}, (userSaveErr) => {
            if (userSaveErr) res.sendStatus(400);
            else {
              res.sendStatus(200);
            }
          });
        }
      } else {
        res.sendStatus(400);
      }
    }
  } else {
    if (
      userData.firstname !== "" &&
      userData.lastname !== "" &&
      userData.email !== "" &&
      userData.username !== "" &&
      userData.password !== "" &&
      userData.mobile !== ""
    ) {
      if (userData.password.trim().length > 5) {
        if (
          (await userModel.findOne({ username: userData.username })) === null
        ) {
          var userFilePath = uploadDir + Date.now() + userImage.name;
          if (typeof userImage !== "undefined") {
            userImage.mv("public/" + userFilePath, (err) => {
              if (err) {
                res.sendStatus(402);
              } else {
                var dataToInsert = {
                  ...userData,
                  password: bcrypt.hashSync(userData.password),
                  profile_image: process.env.BASE_URL + userFilePath,
                  counter: 0,
                  usertype: usertype._id,
                };
                var user = new userModel(dataToInsert);
                user.save().then((respone, err) => {
                  if (err) {
                    fs.unlinkSync("public/" + userFilePath);
                    res.sendStatus(400);
                  } else res.sendStatus(200);
                });
              }
            });
          } else res.sendStatus(406);
        } else {
          res.sendStatus(405);
        }
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(400);
    }
  }
};
