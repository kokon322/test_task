const Joi = require('joi');

module.exports = Joi.object({
    name: Joi
        .string()
        .min(5)
        .max(200)
        .required(),
    title: Joi
        .string()
        .min(5)
        .max(1000)
        .required(),
    price: Joi
        .number()
        .positive(),
    images: Joi
        .array()
        .min(1)
        .max(3)
        .required()
});