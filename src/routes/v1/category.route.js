const express = require("express");
const auth = require("../../middlewares/auth");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { categoryValidation } = require("../../validations");
const router = express.Router();

router
  .route("/")
  .get(auth("viewCategory"), categoryController.getCategory)
  .post(
    auth("createCategory"),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
  );

module.exports = router;
