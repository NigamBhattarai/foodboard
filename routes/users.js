var express = require("express");
var router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/login", function (req, res, next) {
  UserController.login(req, res);
});
/* Post New User */
router.post("/createuser", function (req, res, next) {
  UserController.createUser(req, res);
});

/* GET users listing. */
router.get("/allusers", (req, res) => {
  UserController.getUsers(req, res);
});

router.get("/allusertypes", (req, res) => {
  UserController.getUserTypes(req, res);
});
router.post("/assignrole", (req, res) => {
  UserController.assignRole(req, res);
});

module.exports = router;
