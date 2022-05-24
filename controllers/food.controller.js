const foodModel = require("../models/food.model");
const variantModel = require("../models/variant.model");
const addOnModel = require("../models/addon.model");
const fs = require("fs");
const addonModel = require("../models/addon.model");
const uploadDir = "images/uploads/food/";
require("../models/category.model");

exports.getAllFoods = (req, res) => {
  foodModel
    .find({})
    .lean()
    .populate("category")
    .exec(async (err, result) => {
      if (result) {
        for (var i = 0; i < result.length; i++) {
          result[i].variants = await variantModel
            .find({ food: result[i]._id })
            .lean()
            .exec();
          for (var j = 0; j < result[i].variants.length; j++) {
            result[i].variants[j].addons = await addOnModel
              .find({ variant: result[i].variants[j]._id })
              .lean()
              .exec();
            for (var k = 0; k < result[i].variants[j].addons.length; k++) {
              result[i].variants[j].addons[k].selected = false;
            }
          }
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};

exports.getFullFoodByObject = (req, res) => {
  var food = JSON.parse(req.query.food);
  foodModel
    .findOne({ _id: food._id })
    .lean()
    .populate("category")
    .exec(async (err, result) => {
      if (result) {
        result.variants = await variantModel
          .find({ food: result._id })
          .lean()
          .exec();
        for (var j = 0; j < result.variants.length; j++) {
          result.variants[j].addons = await addOnModel
            .find({ variant: result.variants[j]._id })
            .lean()
            .exec();
          for (var k = 0; k < result.variants[j].addons.length; k++) {
            result.variants[j].addons[k].selected = false;
          }
        }
        console.log(result);
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};

exports.getAllActiveFoods = (req, res) => {
  foodModel
    .find({ status: true })
    .lean()
    .populate("category")
    .exec(async (err, result) => {
      if (result) {
        for (var i = 0; i < result.length; i++) {
          result[i].variants = await variantModel
            .find({ food: result[i]._id })
            .lean()
            .exec();
          for (var j = 0; j < result[i].variants.length; j++) {
            result[i].variants[j].addons = await addOnModel
              .find({ variant: result[i].variants[j]._id })
              .lean()
              .exec();
            for (var k = 0; k < result[i].variants[j].addons.length; k++) {
              result[i].variants[j].addons[k].selected = false;
            }
          }
        }
        res.send(result);
      } else {
        console.log(err);
        res.send(err);
      }
    });
};

async function getAllVariantsOfFood(id) {
  return await variantModel.find({ food: id }).lean();
}

exports.addFood = async (req, res) => {
  //ERRORS:
  // 406: FILE ERROR
  // 400: DATABASE ERROR

  // console.log(req.body.textData);

  const receivedData = JSON.parse(req.body.textData);
  const receivedFiles = req.files;
  const isEdit = typeof receivedData._id !== "undefined";
  if (!fs.existsSync("public/" + uploadDir))
    fs.mkdirSync("public/" + uploadDir, { recursive: true });
  if (isEdit) {
    var isFoodFile = false;
    receivedFiles !== null &&
      typeof receivedFiles.foodImageFile !== "undefined" &&
      (isFoodFile = true);
    const foodFromDB = await foodModel.findOne({ _id: receivedData._id });
    var foodFilePath = foodFromDB.image;
    if (isFoodFile) {
      foodFilePath = uploadDir + Date.now() + receivedFiles.foodImageFile.name;
      receivedFiles.foodImageFile.mv("public/" + foodFilePath, (err) => {
        if (err) return res.status(406).send(err);
        else {
          if (
            typeof foodFromDB.image.split(process.env.BASE_URL)[1] !==
            "undefined"
          )
            try {
              fs.unlinkSync(
                "public/" + foodFromDB.image.split(process.env.BASE_URL)[1]
              );
            } catch (err) {
              console.log(err);
            }
        }
      });
      foodFilePath = process.env.BASE_URL + foodFilePath;
    }
    var food = {
      name: receivedData.name,
      desc: receivedData.desc,
      veg:
        typeof receivedData.veg !== "boolean"
          ? receivedData.veg === "true"
          : receivedData.veg,
      image: foodFilePath,
      status:
        typeof receivedData.status !== "boolean"
          ? receivedData.status === "true"
          : receivedData.status,
      createdAt: foodFromDB.createdAt,
      updatedAt: Date.now(),
      category:
        typeof receivedData.category === "object"
          ? receivedData.category._id
          : receivedData.category,
    };
    await foodModel
      .updateOne(
        { _id: foodFromDB._id },
        food,
        {},
        async function (foodSaveErr, modDoc) {
          var newFood = foodFromDB;
          if (foodSaveErr) {
            console.log(foodSaveErr);
            return res.status(500).send({ error: foodSaveErr });
          } else {
            receivedData.variants.forEach(
              async (receivedVariant, receivedVariantIndex) => {
                var isVariantFile = false;
                var isNewVariant = typeof receivedVariant._id === "undefined";
                receivedFiles !== null &&
                  typeof receivedFiles[
                    "variantImageFile" + receivedVariantIndex
                  ] !== "undefined" &&
                  (isVariantFile = true);

                var variantImageFullURL = "";

                var variant = {
                  name: receivedVariant.name,
                  desc: receivedVariant.desc,
                  price: Number.parseInt(receivedVariant.price),
                  default: receivedVariant.default,
                  sourLevel: receivedVariant.sourLevel,
                  createdAt: Date.now(),
                  updatedAt: Date.now(),
                  food: newFood._id,
                };

                if (isVariantFile) {
                  var variantFromDB = {};
                  var variantImageURL =
                    uploadDir +
                    Date.now() +
                    receivedFiles["variantImageFile" + receivedVariantIndex]
                      .name;
                  if (!isNewVariant) {
                    variantFromDB = await variantModel.findOne({
                      _id: receivedVariant._id,
                    });
                    variant.createdAt = variantFromDB.createdAt;
                  }
                  variantImageFullURL = process.env.BASE_URL + variantImageURL;
                  console.log(variantFromDB.name);
                  console.log(variantImageFullURL);
                  receivedFiles["variantImageFile" + receivedVariantIndex].mv(
                    "public/" + variantImageURL,
                    (err) => {
                      console.log("First" + receivedVariantIndex);
                      if (err) return res.status(406).send(err);
                      else {
                        if (!isNewVariant) {
                          if (
                            typeof variantFromDB.image.split(
                              process.env.BASE_URL
                            )[1] !== "undefined"
                          )
                            try {
                              fs.unlinkSync(
                                "public/" +
                                  variantFromDB.image.split(
                                    process.env.BASE_URL
                                  )[1]
                              );
                            } catch (err) {
                              console.log(err);
                            }
                        }
                      }
                    }
                  );
                } else {
                  variantFromDB = await variantModel.findOne({
                    _id: receivedVariant._id,
                  });
                  variant.createdAt = variantFromDB.createdAt;
                  variantImageFullURL = variantFromDB.image;
                }
                console.log("Second" + receivedVariantIndex);
                variant.image = variantImageFullURL;
                var savedVariant;
                if (isNewVariant) {
                  var variantToSave = new variantModel({
                    ...variant,
                    food: newFood._id,
                  });
                  try {
                    savedVariant = await variantToSave.save();
                  } catch (err) {
                    if (err) res.status(500).send(err);
                  }
                } else {
                  try {
                    savedVariant = await variantModel.findByIdAndUpdate(
                      receivedVariant._id,
                      variant,
                      {}
                    );
                  } catch (err) {
                    if (err) res.status(500).send(err);
                  }
                }
                await receivedVariant.addons.forEach(
                  async (receivedAddon, receivedAddonIndex) => {
                    if (typeof receivedAddon._id === "undefined") {
                      var addon = new addOnModel({
                        name: receivedAddon.name,
                        price: receivedAddon.price,
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        variant: savedVariant._id,
                      });
                      try {
                        addon.save();
                      } catch (error) {
                        if (error) res.status(500).send(error);
                      }
                      //Everything went well
                    }
                  }
                );
              }
            );
          }
        }
      )
      .clone();
    const variantsToDelete = receivedData.variantsToDelete;
    const addonsToDelete = receivedData.addonsToDelete;
    await variantsToDelete.forEach(async (value, index, array) => {
      var variant = await variantModel.findOne({ _id: value._id });
      variant.food = undefined;
      await variant.save();
    });

    await addonsToDelete.forEach(async (value, index, array) => {
      var addon = await addonModel.findOne({ _id: value._id });
      addon.variant = undefined;
      await addon.save();
    });

    var foodToSend = await foodModel.findOne({ _id: receivedData._id });
    res.status(200).send(foodToSend);
  } else {
    var foodFilePath =
      uploadDir + Date.now() + receivedFiles.foodImageFile.name;
    await receivedFiles.foodImageFile.mv(
      "public/" + foodFilePath,
      async (err) => {
        if (err) {
          res.status(406).send(err);
        } else {
          var food = new foodModel({
            name: receivedData.name,
            desc: receivedData.desc,
            veg:
              typeof receivedData.veg !== "boolean"
                ? receivedData.veg === "true"
                : receivedData.veg,
            image: process.env.BASE_URL + foodFilePath,
            status:
              typeof receivedData.status !== "boolean"
                ? receivedData.status === "true"
                : receivedData.status,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            category:
              typeof receivedData.category === "object"
                ? receivedData.category._id
                : receivedData.category,
          });
          await food.save(async (foodError, newFood) => {
            if (foodError) res.status(400).send(err);
            else {
              await receivedData.variants.forEach(
                async (receivedVariant, receivedVariantIndex) => {
                  var variantFilePath =
                    uploadDir +
                    Date.now() +
                    receivedFiles["variantImageFile" + receivedVariantIndex]
                      .name;
                  await receivedFiles[
                    "variantImageFile" + receivedVariantIndex
                  ].mv("public/" + variantFilePath, async (varFileErr) => {
                    if (varFileErr) {
                      await variantModel.deleteMany({ food: newFood._id });
                      await foodModel.deleteOne({ _id: newFood._id });
                      res.status(406).send(varFileErr);
                    } else {
                      var variant = new variantModel({
                        name: receivedVariant.name,
                        image: process.env.BASE_URL + variantFilePath,
                        price: Number.parseInt(receivedVariant.price),
                        desc: receivedVariant.desc,
                        default: receivedVariant.default,
                        sourLevel: receivedData.sourLevel,
                        createdAt: Date.now(),
                        updatedAt: Date.now(),
                        food: newFood._id,
                      });
                      await variant.save(async (variantError, newVariant) => {
                        if (variantError) {
                          await variantModel.deleteMany({ food: newFood._id });
                          await foodModel.deleteOne({ _id: newFood._id });
                          res.status(400).send(variantError);
                        } else {
                          await receivedVariant.addons.forEach(
                            async (receivedAddon, receivedAddonIndex) => {
                              var addon = new addOnModel({
                                name: receivedAddon.name,
                                price: receivedAddon.price,
                                createdAt: Date.now(),
                                updatedAt: Date.now(),
                                variant: newVariant._id,
                              });
                              await addon.save(async (addonError, newAddon) => {
                                if (addonError) {
                                  await addOnModel.deleteMany({
                                    variant: newVariant._id,
                                  });
                                  await variantModel.deleteMany({
                                    food: newFood._id,
                                  });
                                  await foodModel.deleteOne({
                                    _id: newFood._id,
                                  });
                                  res.status(400).send(addonError);
                                } else {
                                  //EVERYTHING WENT WELL
                                }
                              });
                            }
                          );
                        }
                      });
                    }
                  });
                }
              );
            }
          });
        }
      }
    );
    var foodToSend = await foodModel.findOne({ _id: receivedData._id });
    res.status(200).send(foodToSend);
  }
};
