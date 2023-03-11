const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { categoryService } = require("../services");
const createCategory = catchAsync(async (req, res, next) => {
  const category = await categoryService.createCategory(req.body);
  res.send(category);
});

const getCategory = catchAsync(async (req, res, next) => {
  const getAllCategoryList = await categoryService.getAllCategoryList();
  res.send(getAllCategoryList);
});
module.exports = {
  createCategory,
  getCategory,
};
