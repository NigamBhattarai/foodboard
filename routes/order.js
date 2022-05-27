var express = require("express");
var router = express.Router();
const orderController = require("../controllers/order.controller");

/* GET order api. */
router.get("/", function (req, res, next) {
  orderController.getAllOrders(req, res);
});

/* GET new token id */
router.get("/new-token", function (req, res, next) {
  orderController.getNewTokenNumber(req, res);
});

/* GET order count */
router.get("/totalOrdercount", function (req, res, next) {
  orderController.getTotalOrderCount(req, res);
});

/* GET order count */
router.get("/getrevenue", function (req, res, next) {
  orderController.getTotalRevenue(req, res);
});

/* POST new Order */
router.post("/add", function (req, res, next) {
  orderController.addNewOrder(req, res);
});

router.post("/updateStatus", (req, res) =>
  orderController.updateStatus(req, res)
);

module.exports = router;
