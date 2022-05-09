var express = require('express');
var router = express.Router();
const orderController = require("../controllers/order.controller");

/* GET order api. */
router.get('/', function(req, res, next) {
  orderController.getAllOrders(req, res);
});

module.exports = router;
