const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);

/**
 * @typedef {Object} Category
 * @property {string} categoryName
 * @property {string} categoryDescription
 */
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
