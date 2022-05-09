var express = require('express');
var router = express.Router();
const OrderRouter = require("./order");
const FoodRouter = require("./food");
const CategoryRouter = require("./category");

/* GET order api. */
router.use('/api/orders', OrderRouter);
router.use('/api/food', FoodRouter);
router.use('/api/category', CategoryRouter);

module.exports = router;
