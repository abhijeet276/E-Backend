const Joi = require("joi");
const createCategory = {
  body: Joi.object().keys({
    categoryName: Joi.string().required(),
    categoryDescription: Joi.string().required(),
    isActive: Joi.boolean().optional(),
  }),
};

module.exports = {
  createCategory,
};
