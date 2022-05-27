const categoryModel = require("../models/category.model");
const foodModel = require("../models/food.model");
const fs = require("fs");
const uploadDir = "images/uploads/category/";

exports.getAllCategories = (req, res) => {
  categoryModel
    .find({})
    .lean()
    .exec(async (err, result) => {
      if (result) {
        for (var i = 0; i < result.length; i++) {
          const foodCount = await foodModel.count({ category: result[i]._id });
          result[i].foodCount = foodCount;
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};

exports.getActiveCategories = (req, res) => {
  categoryModel
    .find({ status: true })
    .lean()
    .exec(async (err, result) => {
      if (result) {
        for (var i = 0; i < result.length; i++) {
          const foodCount = await foodModel.count({ category: result[i]._id });
          result[i].foodCount = foodCount;
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};

exports.removeCategory = async (req, res) => {
  const foodCount = await foodModel.count({ category: req.body.id });
  const category = await categoryModel.findOne({ _id: req.body.id });
  if (category !== null && foodCount === 0) {
    try {
      await categoryModel.deleteOne({ _id: req.body.id });
      try {
        fs.unlinkSync(
          "public/" + category.image.split(process.env.BASE_URL)[1]
        );
      } catch (err) {
        res.sendStatus(401);
      }
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(400);
  }
};

exports.addCategory = async (req, res) => {
  const receivedData = JSON.parse(req.body.textData);
  const receivedFile =
    req.files !== null && typeof req.files !== "undefined"
      ? req.files.categoryImage
      : undefined;
  // console.log(receivedFile);
  // console.log(receivedData);
  const isStatus =
    typeof receivedData.status === "boolean"
      ? receivedData.status
      : receivedData.status.trim() === "true";
  const isEdit = typeof receivedData._id !== "undefined";
  if (!fs.existsSync("public/" + uploadDir))
    fs.mkdirSync("public/" + uploadDir, { recursive: true });
  if (isEdit) {
    var category = await categoryModel.findOne({ _id: receivedData._id });
    if (category !== null) {
      var temp_category = {
        name: category.name,
        image: category.image,
        status: category.status,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      };
      if (typeof receivedFile !== "undefined") {
        filePath = uploadDir + Date.now() + receivedFile.name;
        receivedFile.mv("public/" + filePath, (err) => {
          if (err) {
            console.error(err);
            return res.status(406).send(err);
          } else {
            if (
              typeof category.image.split(process.env.BASE_URL)[1] !==
              "undefined"
            )
              try {
                fs.unlinkSync(
                  "public/" + category.image.split(process.env.BASE_URL)[1]
                );
              } catch (err) {
                res.sendStatus(401);
              }
          }
        });
      }
      typeof receivedFile !== "undefined" &&
        (temp_category.image = process.env.BASE_URL + filePath);
      temp_category.name = receivedData.name;
      temp_category.status = isStatus;
      temp_category.updatedAt = new Date();
      categoryModel.updateOne(
        { _id: category._id },
        temp_category,
        {},
        (categorySaveError) => {
          if (categorySaveError) res.sendStatus(400);
          res.sendStatus(200);
        }
      );
    } else {
      res.sendStatus(400);
    }
  } else {
    if (typeof receivedFile !== "undefined") {
      filePath = uploadDir + Date.now() + receivedFile.name;
      receivedFile.mv("public/" + filePath, (err) => {
        if (err) {
          console.error(err);
          return res.status(406).send(err);
        } else {
          var category = new categoryModel({
            name: receivedData.name,
            image: process.env.BASE_URL + filePath,
            status: isStatus,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
          category.save().then((savedDoc, err) => {
            if (err) res.sendStatus(400);
            else {
              savedDoc.foodCount = 0;
              res.status(200).send(savedDoc);
            }
          });
        }
      });
    } else {
      res.status(400).send("No file uploaded");
    }
  }
};
