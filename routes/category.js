var express = require('express');
var router = express.Router();
const CategoryController = require("../controllers/category.controller");

/* GET category listing. */
router.get('/', function(req, res, next) {
  CategoryController.getAllCategories(req, res);
});

module.exports = router;
