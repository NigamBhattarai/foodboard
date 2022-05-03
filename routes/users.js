var express = require('express');
var router = express.Router();
const UserController = require("../controllers/user.controller");

/* GET users listing. */
router.post('/login', function(req, res, next) {
  UserController.login(req, res);
});

module.exports = router;
