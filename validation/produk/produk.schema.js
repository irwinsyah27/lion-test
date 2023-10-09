const Joi = require('joi');

const schema = {
    create: Joi.object({
        title: Joi.string().max(150).required(),
        description: Joi.string().max(255).allow(''),
        full_description: Joi.string().max(5000).allow(''),
        price: Joi.number().min(100).max(100000000).required(),
        category_id: Joi.number().required()
    })
}

module.exports = schema;