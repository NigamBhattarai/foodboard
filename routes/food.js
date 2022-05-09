var express = require('express');
var router = express.Router();
const foodController = require("../controllers/food.controller");

/* GET food api. */
router.get('/', function(req, res, next) {
    foodController.getAllFoods(req, res)
});

module.exports = router;
