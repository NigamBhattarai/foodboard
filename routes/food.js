var express = require("express");
var router = express.Router();
const foodController = require("../controllers/food.controller");
var cors = require("cors");

//CORS
// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };

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

router.get("/trending", function (req, res, next) {
  foodController.getTrendingFoods(req, res);
});

router.get("/totalfoodcount", function (req, res, next) {
  foodController.getTotalFoodCount(req, res);
});

router.post("/add", function (req, res, next) {
  foodController.addFood(req, res);
});

module.exports = router;
