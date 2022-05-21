var express = require("express");
var router = express.Router();
const foodController = require("../controllers/food.controller");

/* GET food api. */
router.get("/", function (req, res, next) {
  foodController.getAllFoods(req, res);
});

router.get("/active", function (req, res, next) {
  foodController.getAllActiveFoods(req, res);
});

router.get("/getbyobject", function (req, res, next) {
  foodController.getFullFoodByObject(req, res);
});

router.post("/add", function (req, res, next) {
  foodController.addFood(req, res);
});

module.exports = router;
