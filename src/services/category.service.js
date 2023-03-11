const httpStatus = require("http-status");
const { Category } = require("../models");
const ApiError = require("../utils/ApiError");
/**
 * Create a category
 * @param {Object} category
 * @returns {Promise<category>}
 */
const createCategory = async (categoryBody) => {
  const category = await Category.create(categoryBody);
  if (!category)
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Something went wrong"
    );
  return category;
};
const getAllCategoryList = async () => {
  const List = await Category.find({ isActive: "true" });
  // console.log(List, "demo");
  if (!List)
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Something went wrong"
    );
  return List;
};

module.exports = {
  createCategory,
  getAllCategoryList,
};
