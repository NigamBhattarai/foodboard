var express = require("express");
var router = express.Router();
const CategoryController = require("../controllers/category.controller");

/* GET category listing. */
router.get("/", function (req, res, next) {
  CategoryController.getAllCategories(req, res);
});

/* POST new category. */
router.post("/add", function (req, res, next) {
  CategoryController.addCategory(req, res);
});

/* DELETE category. */
router.delete("/delete", function (req, res, next) {
  CategoryController.removeCategory(req, res);
});

module.exports = router;
