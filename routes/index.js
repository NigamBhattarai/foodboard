var express = require('express');
var router = express.Router();
const orderController = require("../controllers/order.controller");

/* GET order api. */
router.get('/api/orders', function(req, res, next) {
  orderController.getAllOrderDetails(req, res);
});

module.exports = router;
